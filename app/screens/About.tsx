import * as React from 'react';
import {useTheme} from '../theme/useTheme';
import Text from '../components/Text/Text';
import Container from '../components/Container/Container';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Rounded from '../components/Rounded/Rounded';
import {Image, View} from 'react-native';
import TitleBar from '../components/TitleBar/TitleBar';
import browserHandler from '../handlers/browserHandler';
import {useCallback} from 'react';
import {useModal} from 'react-native-modal-provider';
import {LinearGradient} from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';

const iconURL = require('../assets/images/appicon.png');

const About = () => {
  const {closeModal} = useModal();
  const {theme} = useTheme();
  const locationsData = useSelector((state: RootState) => state.data.content);

  const openAppStoreReview = useCallback(() => {
    const appStoreURL = 'https://apps.apple.com/app/id6466740299';
    browserHandler(appStoreURL);
  }, []);

  return (
    <TitleBar
      backgroundColor={theme.backgroundColor}
      cancellationColor={theme.accentColor}
      cancellationText="Close"
      cancellationAction={closeModal}
      confirmationColor={theme.accentColor}
      confirmationText="Review"
      confirmationAction={openAppStoreReview}
      titleColor="black"
      titleText={locationsData.app.name}
      detent="medium">
      <Container scrollable gap="xlarge" padding={false}>
        <Container gap="xlarge">
          <Container padding={false} alignment="center">
            <Container padding={false} alignment="center" gap="small">
              <View style={{width: 102, height: 102, marginLeft: 30}}>
                <Rounded
                  radius={16}
                  smooth
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 72,
                    height: 72,
                    paddingTop: 10,
                  }}
                  borderWidth={1}
                  borderColor="white">
                  <LinearGradient
                    colors={['#DC1E35', '#02529C']}
                    start={{x: 0, y: 0.6}}
                    end={{x: 1, y: 0.4}}
                    style={{
                      width: '100%',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 1 / 3,
                    }}
                  />
                </Rounded>
                <BlurView
                  style={{
                    position: 'absolute',
                    top: -30,
                    left: -30,
                    bottom: 0,
                    right: 0,
                  }}
                  blurType="light"
                  blurAmount={15}
                  reducedTransparencyFallbackColor="white"
                />
                <Rounded
                  radius={16}
                  smooth
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 72,
                    height: 72,
                    position: 'absolute',
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
              </View>
              <Text size="title" bold color={theme.primaryColor}>
                {locationsData.app.name}
              </Text>
              <Text size="large" color={theme.primaryColor}>
                {locationsData.app.version}
              </Text>
            </Container>
          </Container>
          <Container padding={false} edges={['bottom']}>
            <Text color={theme.primaryColor}>{locationsData.app.legal}</Text>
            <Container padding={false}>
              <Text size="large" bold color={theme.primaryColor}>
                Changelog
              </Text>
              <Container padding={false} direction="row">
                <View
                  style={{
                    backgroundColor: 'rgb(230, 230, 230)',
                    width: 4,
                    height: '100%',
                  }}
                />
                <Container padding={false}>
                  {Object.entries(locationsData.app.changelog).map(
                    ([version, changes]) => (
                      <Container padding={false} key={version} gap="small">
                        <Text bold color={theme.primaryColor}>
                          Version {version}
                        </Text>
                        {changes.map((change, index) => (
                          <Text key={index} color={theme.primaryColor}>
                            {'  '}•{'  '} {change}
                          </Text>
                        ))}
                      </Container>
                    ),
                  )}
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </TitleBar>
  );
};

export default About;
