import {useDispatch} from 'react-redux';
import {updateData} from '../store/dataSlice';
import {Dispatch, useCallback} from 'react';
import {AnyAction} from '@reduxjs/toolkit';

const locationsDataURL =
  'https://raw.githubusercontent.com/thordotcomputer/afangastathur/main/app/assets/locations.json';

export const dataHandler = (
  dispatch: Dispatch<AnyAction>,
  state: 'loading' | 'loaded' | 'error',
  data: any,
) => {
  console.log(`[LOG] dataHandler set dataState: ${state}`);
  dispatch(updateData({state, content: data}));
};

const useDataHandler = () => {
  const dispatch = useDispatch();
  const handleData = useCallback(() => {
    fetch(locationsDataURL)
      .then(
        response =>
          new Promise(resolve =>
            setTimeout(() => resolve(response.json()), 2000),
          ),
      )
      .then(data => dataHandler(dispatch, 'loaded', data))
      .catch(() => dataHandler(dispatch, 'error', null));
  }, [dispatch]);

  return handleData;
};

export default useDataHandler;
