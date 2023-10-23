import * as React from 'react';
import {Animated, StatusBar} from 'react-native';
import Text from '../components/Text/Text';
import Progress from '../components/Progress/Progress';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootState} from '../store/store';
import {useSelector} from 'react-redux';
import {useTheme} from '../theme/useTheme';
import Container from '../components/Container/Container';
import AppArt from '../components/AppArt/AppArt';
import Button from '../components/Button/Button';
import useDataHandler from '../handlers/dataHandler';
import {useDispatch} from 'react-redux';
import {dataHandler} from '../handlers/dataHandler';
import TitleBar from '../components/TitleBar/TitleBar';

const artURL = require('../assets/images/IMG_7671.jpg');
const localData = require('../assets/locations.json');

const Loading = () => {
  const {theme} = useTheme();
  const dataState = useSelector((state: RootState) => state.data.state);
  const dispatch = useDispatch();

  const handledata = useDataHandler();
  React.useEffect(() => {
    if (dataState === 'loading') {
      handledata();
    }
  });

  const opacity = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: dataState === 'error' ? 0.2 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [opacity, dataState]);

  const opacityButton = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(opacityButton, {
      toValue: dataState === 'error' ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [opacityButton, dataState]);

  const titleText = 'Áfangastaður';
  const bodyText = '- Explore Iceland';
  const loadingText = 'Fetching destinations...';
  const errorText = 'Destinations are unavailable';
  const buttonText = 'Continue with fallback destinations';

  return (
    <TitleBar backgroundColor={theme.backgroundColor}>
      <SafeAreaView
        edges={['top']}
        style={{
          flex: 1,
        }}>
        <StatusBar animated barStyle="dark-content" />
        <Container alignment="center" justifying="space-between">
          <Container alignment="center" justifying="center" gap="small">
            <Text size="title" bold color={theme.primaryColor}>
              {titleText}
            </Text>
            <Text size="large" color={theme.primaryColor}>
              {bodyText}
            </Text>
          </Container>
          <Progress
            color={dataState === 'error' ? '#DC1E35' : theme.primaryColor}>
            <Text
              color={dataState === 'error' ? '#DC1E35' : theme.primaryColor}>
              {dataState === 'error' ? errorText : loadingText}
            </Text>
          </Progress>
        </Container>
        <Animated.View style={{opacity: opacity}}>
          <AppArt source={artURL} />
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            width: '100%',
            opacity: opacityButton,
          }}>
          <Container edges={['bottom']}>
            <Button
              active={dataState === 'error'}
              color="#DC1E35"
              text={buttonText}
              onPress={() => dataHandler(dispatch, 'loaded', localData)}
            />
          </Container>
        </Animated.View>
      </SafeAreaView>
    </TitleBar>
  );
};

export default Loading;
