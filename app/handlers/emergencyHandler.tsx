import {useDispatch} from 'react-redux';
import {openModal} from '../store/modalSlice';
import {useTheme} from '../theme/useTheme';
import React, {useCallback} from 'react';
import Emergency from '../screens/Emergency';

const useEmergencyHandler = () => {
  const {theme} = useTheme();
  const dispatch = useDispatch();

  const handleEmergency = useCallback(() => {
    dispatch(
      openModal({
        node: <Emergency />,
        backgroundColor: '#DC1E35',
        accentColor: theme.backgroundColor,
        cancellationText: 'Close',
        detent: 'small',
      }),
    );
  }, [dispatch, theme]);

  return handleEmergency;
};

export default useEmergencyHandler;
