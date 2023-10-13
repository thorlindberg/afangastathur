import * as React from 'react';
import Container from '../components/Container/Container';
import Text from '../components/Text/Text';
import {useTheme} from '../theme/useTheme';
import Button from '../components/Button/Button';
import HeaderImage from '../components/HeaderImage/HeaderImage';
import {PinProps} from '../components/Pin/types';
import {Linking} from 'react-native';
import Slide from '../components/Slide/Slide';

const Destination = ({location}: PinProps) => {
  const {theme} = useTheme();

  return (
    <Container scrollable divider scaling={1}>
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
          onPress={() => {
            Linking.canOpenURL(
              `comgooglemaps://?q=${location.latitude},${location.longitude}`,
            )
              .then(supported => {
                if (supported) {
                  Linking.openURL(
                    `comgooglemaps://?q=${location.latitude},${location.longitude}`,
                  );
                } else {
                  console.log('Google Maps is not installed on the device.');
                  `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`;
                }
              })
              .catch(error => {
                console.error(
                  'An error occurred while trying to open Google Maps: ',
                  error,
                );
              });
          }}
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
      {(location.phone || location.email) && (
        <Container padding={false}>
          <Text size="large" bold color={theme.primaryColor}>
            Contact information
          </Text>
          {location.phone && (
            <Slide
              onPress={() => {
                Linking.openURL(`telprompt:${location.phone}`);
              }}
              color="#158020"
              text={`Slide to call ${location.phone}`}
              icon="phone"
            />
          )}
          {location.email && (
            <Button
              color={theme.accentColor}
              text={location.email}
              icon="mail"
              onPress={() => {
                Linking.openURL(`mailto:${location.email}`);
              }}
            />
          )}
        </Container>
      )}
      <Container padding={false} edges={['bottom']}>
        <Text size="large" bold color={theme.primaryColor}>
          Learn more
        </Text>
        {location.url && (
          <Button
            color={theme.primaryColor}
            text={location.url}
            icon="arrow-outward"
          />
        )}
      </Container>
    </Container>
  );
};
export default Destination;
