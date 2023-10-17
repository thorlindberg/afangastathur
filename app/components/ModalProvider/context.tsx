import React from 'react';
import {ContextInterface, ModalContextInterface, ModalState} from './types';

const Context = React.createContext({} as ContextInterface);

const initialState: ModalState = {
  isPresented: false,
  detent: 'medium',
};

export const ModalContext = ({children}: ModalContextInterface): JSX.Element => {
  const [state, setState] = React.useState(initialState);
  return (
    <Context.Provider value={{state, setState}}>{children}</Context.Provider>
  );
};

export const useModal = () => {
  const {state, setState} = React.useContext(Context);

  const openModal = (content: ModalState) => {
    setState({
      ...state,
      ...content,
      isPresented: true,
    });
  };

  const readModal = () => state;

  const updateModal: <K extends keyof ModalState>(update: {
    key: K;
    value: ModalState[K];
  }) => void = ({key, value}) => {
    setState({
      ...state,
      [key]: value,
    });
  };

  const closeModal = () => setState(initialState);

  return {state, openModal, readModal, updateModal, closeModal};
};
