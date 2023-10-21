import React, {useCallback} from 'react';
import Container from '../components/Container/Container';
import Text from '../components/Text/Text';
import {useTheme} from '../theme/useTheme';
import Button from '../components/Button/Button';
import HeaderImage from '../components/HeaderImage/HeaderImage';
import {PinProps} from '../components/Pin/types';
import {Linking, Share} from 'react-native';
import TitleBar from '../components/TitleBar/TitleBar';
import {useModal} from 'react-native-modal-provider';
import browserHandler from '../handlers/browserHandler';

const Destination = ({location}: PinProps) => {
  const {closeModal} = useModal();
  const {theme} = useTheme();

  const openShareSheet = async () => {
    try {
      const result = await Share.share({
        message: `${location.title}: ${location.url}`,
      });
      if (result.action === Share.sharedAction) {
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      console.error('[ERROR] Could not share:', error);
    }
  };

  const directionsHandler = () => {
    Linking.canOpenURL(
      `comgooglemaps://?q=${location.latitude},${location.longitude}`,
    )
      .then(googleSupported => {
        if (googleSupported) {
          Linking.openURL(
            `comgooglemaps://?q=${location.latitude},${location.longitude}`,
          );
        } else {
          Linking.canOpenURL(
            `maps://?q=${location.latitude},${location.longitude}`,
          )
            .then(appleSupported => {
              if (appleSupported) {
                Linking.openURL(
                  `maps://?q=${location.latitude},${location.longitude}`,
                );
              } else {
                console.log('Maps apps are not installed on the device.');
                Linking.openURL(
                  `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`,
                );
              }
            })
            .catch(error => {
              console.error(
                'An error occurred while trying to open Apple Maps: ',
                error,
              );
            });
        }
      })
      .catch(error => {
        console.error(
          'An error occurred while trying to open Google Maps: ',
          error,
        );
      });
  };

  const openURL = useCallback(() => {
    const linkURL = location.url;
    browserHandler(linkURL);
  }, [location.url]);

  return (
    <TitleBar
      backgroundColor={theme.backgroundColor}
      cancellationColor={theme.accentColor}
      cancellationText="Close"
      cancellationAction={closeModal}
      confirmationColor={theme.accentColor}
      confirmationText="Share"
      confirmationAction={openShareSheet}
      titleColor={'black'}
      titleText={location.title}
      detent="large">
      <Container scrollable divider scaling={1} edges={['bottom']}>
        <Container padding={false}>
          <Container padding={false} gap={'small'}>
            <Text size="title" bold color={theme.primaryColor}>
              {location.title}
            </Text>
            <Text size="body" italic color={theme.primaryColor}>
              {location.category} in Iceland
            </Text>
          </Container>
          <HeaderImage source={{uri: location.image}} />
          <Text color={theme.primaryColor}>{location.description}</Text>
          <Button
            color={theme.primaryColor}
            text="Get directions in Google Maps"
            icon="map"
            onPress={directionsHandler}
          />
        </Container>
        {location.artifact && (
          <Container padding={false}>
            <Text size="large" bold color={theme.primaryColor}>
              Artifacts
            </Text>
            <Container padding={false} scaling={1} gap={'small'}>
              <Button color="#646464" />
              <Text italic color={theme.primaryColor}>
                Artifact name
              </Text>
            </Container>
          </Container>
        )}
        {location.hours && (
          <Container padding={false}>
            <Text size="large" bold color={theme.primaryColor}>
              Opening hours
            </Text>
            <Text color={theme.primaryColor}>{location.hours}</Text>
          </Container>
        )}
        <Container padding={false}>
          <Text size="large" bold color={theme.primaryColor}>
            Learn more
          </Text>
          {location.url && (
            <Button
              color={theme.primaryColor}
              text={location.url}
              icon="arrow-outward"
              onPress={openURL}
            />
          )}
        </Container>
      </Container>
    </TitleBar>
  );
};
export default Destination;
