import About from '../screens/About';
import React from 'react';
import {useModal} from 'react-native-modal-provider';

const useAboutHandler = () => {
  const {openModal} = useModal();

  return () => {
    openModal({
      node: <About />,
    });
  };
};

export default useAboutHandler;
