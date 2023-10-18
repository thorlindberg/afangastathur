import Destination from '../screens/Destination';
import React from 'react';
import {PinProps} from '../components/Pin/types';
import {Image} from 'react-native';
import {useModal} from 'react-native-modal-provider';

const useDestinationHandler = ({location}: PinProps) => {
  const {openModal} = useModal();

  return () => {
    Image.prefetch(location.image)
      .then(() => {
        console.log('[LOG] Image prefetch successful');
        openModal({
          node: <Destination location={location} />,
          detent: 'large',
        });
      })
      .catch(error => {
        console.error('[ERROR] Image prefetch failed', error);
      });
  };
};

export default useDestinationHandler;
