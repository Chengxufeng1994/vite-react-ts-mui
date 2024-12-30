import { useContext, useMemo } from 'react';

import contextActions from './actions';
import { AppContext } from './index';

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }

  const { state, dispatch } = context;
  // Memoize the appContextAction to avoid recreating it on every render
  const appContextAction = useMemo(() => contextActions(dispatch), [dispatch]);

  return { state, appContextAction };
};

export { useAppContext };
