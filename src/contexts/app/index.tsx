import React, { createContext, useMemo, useReducer } from 'react';

import { appContextReducer, initialAppState } from './reducer';
import type { AppContextProviderProps, AppContextType } from './types';

const AppContext = createContext<AppContextType>({
  state: initialAppState,
  dispatch: () => null,
});

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appContextReducer, initialAppState);
  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <AppContext.Provider value={{ ...value }}>{children}</AppContext.Provider>;
};

export { AppContextProvider, AppContext };
