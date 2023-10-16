import {useTheme} from '../theme/useTheme';
import React from 'react';
import Emergency from '../screens/Emergency';
import {useModal} from '../components/ModalProvider/context';

const useEmergencyHandler = () => {
  const {openModal} = useModal();
  const {theme} = useTheme();

  return () => {
    openModal({
      node: <Emergency />,
      backgroundColor: '#DC1E35',
      accentColor: theme.backgroundColor,
      cancellationText: 'Close',
      detent: 'small',
    });
  };
};

export default useEmergencyHandler;
