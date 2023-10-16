import React, {createContext, useState, useContext} from 'react';
import {ModalState, ContextProps} from './types';

const Context = createContext<ContextProps>({
  openModal: () => {},
  readModal: () => initialState,
  updateModal: () => {},
  closeModal: () => {},
});

const initialState: ModalState = {
  isPresented: false,
  detent: 'medium',
};

export const useModal = () => useContext(Context);

export const ModalContext = ({children}: React.PropsWithChildren<{}>) => {
  const [modalContent, setModalContent] = useState(initialState);

  const openModal = () => {
    setModalContent({
      ...modalContent,
      isPresented: true,
    });
  };

  const readModal = () => {
    return modalContent;
  };

  const updateModal = ({key, value}: {key: string; value: any}) => {
    setModalContent({
      ...modalContent,
      [key]: value,
    });
  };

  const closeModal = () => {
    setModalContent(initialState);
  };

  return (
    <Context.Provider value={{openModal, readModal, updateModal, closeModal}}>
      {children}
    </Context.Provider>
  );
};

export default ModalContext;
