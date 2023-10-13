import {useDispatch} from 'react-redux';
import {openModal} from '../store/modalSlice';
import {useTheme} from '../theme/useTheme';
import React, {useCallback} from 'react';
import Welcome from '../screens/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const APP_OPENED_KEY = 'appOpened';

const useWelcomeHandler = () => {
  const {theme} = useTheme();
  const dispatch = useDispatch();

  const handleWelcome = useCallback(() => {
    AsyncStorage.getItem(APP_OPENED_KEY)
      .then(result => {
        console.log('[LOG] Value retrieved from AsyncStorage:', result); // Add this line
        if (!result) {
          dispatch(
            openModal({
              node: <Welcome />,
              backgroundColor: theme.backgroundColor,
              accentColor: theme.accentColor,
            }),
          );
          AsyncStorage.setItem(APP_OPENED_KEY, 'true').catch(setErr => {
            console.error('[ERROR] Could not set AsyncStorage:', setErr);
          });
        }
      })
      .catch(err => {
        console.error('[ERROR] Could not read AsyncStorage', err);
      });
  }, [dispatch, theme]);

  return handleWelcome;
};

export default useWelcomeHandler;
