export interface ContextInterface {
  state: ScrollState;
  setState: (value: ScrollState) => void;
  log: (message: string) => void;
}

export interface ScrollContextInterface {
  children: React.ReactNode;
  debug?: boolean;
}

export type ScrollState = {
  scrollStates: {[key: string]: boolean};
};

export interface ScrollProviderProps {
  children: React.ReactNode;
  debug?: boolean;
}
