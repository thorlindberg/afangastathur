import {useSelector, useDispatch} from 'react-redux';
import About from '../screens/About';
import {openModal} from '../store/modalSlice';
import {useTheme} from '../theme/useTheme';
import browserHandler from './browserHandler';
import React, {useCallback} from 'react';
import {RootState} from '../store/store';

const useAboutHandler = () => {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  const locationsData = useSelector((state: RootState) => state.data.content);
  const icon = require('../assets/images/appicon.png');

  const openAppStoreReview = useCallback(() => {
    // Replace 'https://www.google.com' with the actual App Store URL for your app
    const appStoreURL = 'https://www.example.com/app-store-url';
    browserHandler(appStoreURL);
  }, []);

  const handleAbout = useCallback(() => {
    dispatch(
      openModal({
        node: <About />,
        backgroundColor: theme.backgroundColor,
        accentColor: theme.accentColor,
        cancellationText: 'Close',
        confirmationText: 'Review',
        confirmationAction: openAppStoreReview,
        divider: true,
        dividerColor: 'rgb(225, 225, 225)',
        title: locationsData.app.name,
        icon: icon,
      }),
    );
  }, [
    dispatch,
    theme.backgroundColor,
    theme.accentColor,
    openAppStoreReview,
    locationsData.app.name,
    icon,
  ]);

  return handleAbout;
};

export default useAboutHandler;
