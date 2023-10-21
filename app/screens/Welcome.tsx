import * as React from 'react';
import Text from '../components/Text/Text';
import {useTheme} from '../theme/useTheme';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Rounded from '../components/Rounded/Rounded';
import {Image} from 'react-native';
import {useModal} from 'react-native-modal-provider';
import {Icon} from '@rneui/themed';
import TitleBar from '../components/TitleBar/TitleBar';

const iconURL = require('../assets/images/appicon.png');

const Welcome = () => {
  const {closeModal} = useModal();
  const {theme} = useTheme();
  const bodyText = 'Welcome to';
  const titleText = 'Áfangastaður';

  return (
    <TitleBar backgroundColor={theme.backgroundColor}>
      <Container edges={['bottom']} alignment="center">
        <Container padding={false} alignment="center">
          <Rounded
            radius={16}
            smooth
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
            }}
            borderWidth={1}
            borderColor="white">
            <Image
              source={iconURL}
              style={{
                width: 72,
                height: 72,
                position: 'absolute',
                backgroundColor: theme.primaryColor,
              }}
              resizeMode="cover"
            />
          </Rounded>
          <Container padding={false} alignment="center" gap="small">
            <Text size="large" color={theme.primaryColor}>
              {bodyText}
            </Text>
            <Text size="title" bold color={theme.primaryColor}>
              {titleText}
            </Text>
          </Container>
        </Container>
        <Container padding={false} gap="large">
          <Container padding={false} alignment="center" direction="row">
            <Icon name="follow-the-signs" color="black" size={36} />
            <Container padding={false} justifying="center" gap="small">
              <Text color={theme.primaryColor} bold>
                Explore Iceland
              </Text>
              <Text color={theme.primaryColor}>
                View the most popular attractions and destinations.
              </Text>
            </Container>
          </Container>
          <Container padding={false} alignment="center" direction="row">
            <Icon
              name="fast-food-outline"
              color="black"
              size={36}
              type="ionicon"
            />
            <Container padding={false} justifying="center" gap="small">
              <Text color={theme.primaryColor} bold>
                Local amenities
              </Text>
              <Text color={theme.primaryColor}>
                Find the resources you need during your travel.
              </Text>
            </Container>
          </Container>
          <Container padding={false} alignment="center" direction="row">
            <Icon name="emergency" color="#DC1E35" size={36} />
            <Container padding={false} justifying="center" gap="small">
              <Text color={theme.primaryColor} bold>
                Emergency assistance
              </Text>
              <Text color={theme.primaryColor}>
                Receive assistance in case of an emergency.
              </Text>
            </Container>
          </Container>
        </Container>
        <Container padding={false} justifying="flex-end">
          <Button
            color={theme.accentColor}
            text="Continue"
            onPress={closeModal}
          />
        </Container>
      </Container>
    </TitleBar>
  );
};

export default Welcome;
