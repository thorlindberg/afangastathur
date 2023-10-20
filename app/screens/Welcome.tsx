import * as React from 'react';
import Text from '../components/Text/Text';
import List from '../components/List/List';
import {useTheme} from '../theme/useTheme';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Rounded from '../components/Rounded/Rounded';
import {Image} from 'react-native';
import {useModal} from 'react-native-modal-provider';

const iconURL = require('../assets/images/appicon.png');

const Welcome = () => {
  const {closeModal} = useModal();
  const {theme} = useTheme();
  const bodyText = 'Welcome to';
  const titleText = 'Áfangastaður';

  return (
    <Container
      scrollable
      padding={false}
      style={{backgroundColor: theme.backgroundColor}}>
      <Container edges={['top', 'bottom']} alignment="center" gap="xlarge">
        <Container alignment="center">
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
          <Container alignment="center" gap="small">
            <Text size="large" color={theme.primaryColor}>
              {bodyText}
            </Text>
            <Text size="title" bold color={theme.primaryColor}>
              {titleText}
            </Text>
          </Container>
        </Container>
        <List />
        <Button
          color={theme.accentColor}
          text="Continue"
          onPress={closeModal}
        />
      </Container>
    </Container>
  );
};

export default Welcome;
