import React from 'react';
import {ContextInterface, ScrollContextInterface, ScrollState} from './types';

const Context = React.createContext({} as ContextInterface);

const initialState: ScrollState = {
  scrollStates: {},
};

const ScrollContext = ({
  children,
  debug = false,
}: ScrollContextInterface): JSX.Element => {
  const [state, setState] = React.useState(initialState);

  const log = (message: string) => {
    if (debug) {
      console.log(message);
    }
  };

  return (
    <Context.Provider value={{state, setState, log}}>
      {children}
    </Context.Provider>
  );
};

export default ScrollContext;

export const useScroll = () => {
  const {state, setState, log} = React.useContext(Context);

  const resetScroll = () => {
    setState({
      ...initialState,
    });
    log('[LOG] ScrollProvider state has been reset.');
  };

  const setScroll = (key: string, value: boolean) => {
    setState({
      ...state,
      scrollStates: {
        ...state.scrollStates,
        [key]: value,
      },
    });
    log(
      `[LOG] ScrollProvider state updated with value: ${value}, key: ${key}.`,
    );
  };

  const getScroll = (key: string) => {
    return state.scrollStates[key] || false;
  };

  return {resetScroll, setScroll, getScroll};
};
