import React from 'react';
import Emergency from '../screens/Emergency';
import {useModal} from '../components/ModalProvider/context';

const useEmergencyHandler = () => {
  const {openModal} = useModal();

  return () => {
    openModal({
      node: <Emergency />,
      detent: 'small',
    });
  };
};

export default useEmergencyHandler;
