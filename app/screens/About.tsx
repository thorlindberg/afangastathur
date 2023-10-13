import * as React from 'react';
import {useTheme} from '../theme/useTheme';
import Text from '../components/Text/Text';
import Container from '../components/Container/Container';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Rounded from '../components/Rounded/Rounded';
import {Image} from 'react-native';
import AppArt from '../components/AppArt/AppArt';

const iconURL = require('../assets/images/appicon.png');
const artURL = require('../assets/images/IMG_7671.jpg');

const About = () => {
  const {theme} = useTheme();
  const locationsData = useSelector((state: RootState) => state.data.content);

  return (
    <Container scrollable padding={false}>
      <Container alignment="center" gap={'xlarge'}>
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
            <Text size="title" bold color={theme.primaryColor}>
              {locationsData.app.name}
            </Text>
            <Text size="large" color={theme.primaryColor}>
              {locationsData.app.version}
            </Text>
          </Container>
        </Container>
        <Text color={theme.primaryColor}>{locationsData.app.legal}</Text>
      </Container>
      <AppArt source={artURL} />
    </Container>
  );
};

export default About;