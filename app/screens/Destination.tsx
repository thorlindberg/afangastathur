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
  const contactText = 'Contact information';
  const contactDescriptionText =
    'Reach out to this destination with this contact information.';

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
          color={theme.accentColor}
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
      <Container padding={false}>
        <Text size="large" color={theme.primaryColor}>
          Artifacts
        </Text>
        <Button color="#646464" />
        <Text italic color={theme.primaryColor}>
          Artifact name
        </Text>
        <Button color="#646464" />
        <Text italic color={theme.primaryColor}>
          Artifact name
        </Text>
      </Container>
      <Container padding={false}>
        <Text italic color={theme.primaryColor}>
          Opening hours
        </Text>
      </Container>
      <Container padding={false}>
        <Text italic color={theme.primaryColor}>
          {contactText}
        </Text>
        <Text color={theme.primaryColor}>{contactDescriptionText}</Text>
        <Slide
          onPress={() => {
            Linking.openURL(`telprompt:${location.phone}`);
          }}
          color="#158020"
          text={`Slide to call ${location.phone}`}
          icon="phone"
        />
        <Button
          color={theme.accentColor}
          text={location.email}
          icon="mail"
          onPress={() => {
            Linking.openURL(`mailto:${location.email}`);
          }}
        />
        <Button color="#646464" text={location.url} icon="arrow-outward" />
      </Container>
    </Container>
  );
};
export default Destination;
