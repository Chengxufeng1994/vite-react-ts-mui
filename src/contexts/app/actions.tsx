import React from 'react';
import type * as Types from './types';
import * as actionTypes from './types';

const contextActions = (dispatch: React.Dispatch<Types.AppAction>) => {
  return {
    app: {},
    breadcrumbs: {
      setBreadcrumbs: (breadcrumbs: Types.AppState['breadcrumbs']) => {
        dispatch({
          type: actionTypes.AppActionType.SET_BREADCRUMBS,
          payload: { breadcrumbs: breadcrumbs },
        });
      },
    },
    theme: {
      toggleDarkMode: () => {
        dispatch({
          type: actionTypes.AppActionType.TOGGLE_DARK_MODE,
          payload: {},
        });
      },
    },
  };
};

export default contextActions;
