import React from 'react';
import {ContextInterface, ModalContextInterface, ModalState} from './types';

const Context = React.createContext({} as ContextInterface);

const initialState: ModalState = {
  isPresented: false,
  detent: 'medium',
};

const ModalContext = ({children}: ModalContextInterface): JSX.Element => {
  const [modal, setModal] = React.useState(initialState);
  return (
    <Context.Provider value={{modal, setModal}}>{children}</Context.Provider>
  );
};

export default ModalContext;

export const useModal = () => {
  const {modal, setModal} = React.useContext(Context);

  const openModal = (content: ModalState) => {
    console.log('[LOG] Opening modal with content:', content);
    setModal({
      ...modal,
      ...content,
      isPresented: true,
    });
  };

  const readModal = () => {
    console.log('[LOG] Fetching modal state.');
    return modal;
  };

  const updateModal: <K extends keyof ModalState>(update: {
    key: K;
    value: ModalState[K];
  }) => void = ({key, value}) => {
    console.log(
      `[LOG] Updating modal state with value ${value} for key ${key}`,
    );
    setModal({
      ...modal,
      [key]: value,
    });
  };

  const closeModal = () => {
    console.log('[LOG] Closing modal.');
    setModal(initialState);
  };

  return {modal, openModal, readModal, updateModal, closeModal};
};
