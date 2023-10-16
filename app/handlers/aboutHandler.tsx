import {useSelector} from 'react-redux';
import About from '../screens/About';
import {useTheme} from '../theme/useTheme';
import browserHandler from './browserHandler';
import React, {useCallback} from 'react';
import {RootState} from '../store/store';
import {useModal} from '../components/ModalProvider/context';

const useAboutHandler = () => {
  const {openModal} = useModal();
  const {theme} = useTheme();
  const locationsData = useSelector((state: RootState) => state.data.content);
  const icon = require('../assets/images/appicon.png');

  const openAppStoreReview = useCallback(() => {
    const appStoreURL = 'https://apps.apple.com/app/id6466740299';
    browserHandler(appStoreURL);
  }, []);

  return () => {
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
    });
  };
};

export default useAboutHandler;
