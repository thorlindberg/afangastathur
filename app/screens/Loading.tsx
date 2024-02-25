import * as React from 'react';
import {StatusBar, View} from 'react-native';
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

const artURL = require('../assets/images/background.png');
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

  const titleText = 'Áfangastaður';
  const bodyText = 'Explore Iceland';
  const loadingText = 'Fetching destinations...';
  const errorText = 'Latest destinations unavailable';
  const buttonText = 'Continue with most recent destinations';

  return (
    <TitleBar backgroundColor={theme.backgroundColor}>
      <SafeAreaView
        edges={['top']}
        style={{
          flex: 1,
        }}>
        <StatusBar animated barStyle="dark-content" />
        <Container alignment="center">
          <AppArt source={artURL} />
        </Container>
        <Container
          justifying="space-between"
          style={{position: 'absolute', height: '100%'}}>
          <Container
            padding={false}
            alignment="center"
            gap="small"
            edges={['top']}>
            <Text size="title" bold color={theme.primaryColor}>
              {titleText}
            </Text>
            <Text size="large" color={theme.primaryColor}>
              {bodyText}
            </Text>
          </Container>
          <Container padding={false} alignment="center">
            {dataState === 'error' ? (
              <Text color={theme.primaryColor}>{errorText}</Text>
            ) : (
              <Progress color={theme.primaryColor}>
                <Text color={theme.primaryColor}>{loadingText}</Text>
              </Progress>
            )}
            {dataState === 'error' && (
              <View
                style={{
                  width: '100%',
                }}>
                <Button
                  active={dataState === 'error'}
                  color="#DC1E35"
                  text={buttonText}
                  onPress={() => dataHandler(dispatch, 'loaded', localData)}
                />
              </View>
            )}
          </Container>
        </Container>
      </SafeAreaView>
    </TitleBar>
  );
};

export default Loading;
