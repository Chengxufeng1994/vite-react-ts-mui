import React from 'react';

import type { BreadcrumbsProps } from '~/src/components/breadcrumbs';

type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

enum AppActionType {
  TOGGLE_DARK_MODE = 'toggleDarkMode',
  SET_BREADCRUMBS = 'setBreadcrumbs',
}

type AppPayload = {
  [AppActionType.TOGGLE_DARK_MODE]: object;
  [AppActionType.SET_BREADCRUMBS]: {
    breadcrumbs: BreadcrumbsProps['breadcrumbs'];
  };
};

type AppAction = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];
// Discriminated unions
// type AppAction =
//   | {
//       type: AppActionType.SET_BREADCRUMBS;
//       payload: { breadcrumbs: BreadcrumbsProps['breadcrumbs'] };
//     }
//   | {
//       type: AppActionType.SET_DARK_MODE;
//       payload: { darkMode: boolean };
//     };

type AppState = {
  darkMode: boolean;
  breadcrumbs: BreadcrumbsProps['breadcrumbs'];
};

type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export type { AppContextType, AppState, AppAction, AppContextProviderProps };
export { AppActionType };
