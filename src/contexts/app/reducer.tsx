import { AppActionType } from './types';
import type { AppState, AppAction } from './types';

const initialAppState: AppState = {
  darkMode: false,
  breadcrumbs: [
    {
      label: 'Home',
      href: '/',
    },
  ],
};

const appContextReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.TOGGLE_DARK_MODE: {
      const darkMode = !state.darkMode;
      return { ...state, darkMode: darkMode };
    }
    case AppActionType.SET_BREADCRUMBS:
      return { ...state, breadcrumbs: [...action.payload.breadcrumbs] };
    default:
      // throw new Error(`Unhandled action type: ${action.type}`);
      return state;
  }
};

export { appContextReducer, initialAppState };
