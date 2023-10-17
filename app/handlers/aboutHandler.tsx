import About from '../screens/About';
import React from 'react';
import {useModal} from '../components/ModalProvider/context';

const useAboutHandler = () => {
  const {openModal} = useModal();

  return () => {
    openModal({
      node: <About />,
    });
  };
};

export default useAboutHandler;
