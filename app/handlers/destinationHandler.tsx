import Destination from '../screens/Destination';
import {useTheme} from '../theme/useTheme';
import React from 'react';
import {PinProps} from '../components/Pin/types';
import {Image, Share} from 'react-native';
import {useModal} from '../components/ModalProvider/context';

const useDestinationHandler = ({location}: PinProps) => {
  const {openModal} = useModal();
  const {theme} = useTheme();

  const openShareSheet = async () => {
    try {
      const result = await Share.share({
        message: `${location.title}: ${location.url}`,
      });
      if (result.action === Share.sharedAction) {
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      console.error('[ERROR] Could not share:', error.message);
    }
  };

  return () => {
    Image.prefetch(location.image)
      .then(() => {
        console.log('[LOG] Image prefetch successful');
        openModal({
          node: <Destination location={location} />,
          backgroundColor: theme.backgroundColor,
          accentColor: theme.accentColor,
          cancellationText: 'Close',
          confirmationText: 'Share',
          confirmationAction: openShareSheet,
          detent: 'large',
          divider: true,
          dividerColor: 'rgb(225, 225, 225)',
          title: location.title,
        });
      })
      .catch(error => {
        console.error('[ERROR] Image prefetch failed', error);
      });
  };
};

export default useDestinationHandler;
