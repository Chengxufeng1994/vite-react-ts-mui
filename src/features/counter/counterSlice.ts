import { StateCreator } from 'zustand';

type TCounterStoreState = {
  count: number;
};

type TCounterStoreAction = {
  increaseCount: () => void;
  decreaseCount: () => void;
  result: () => void;
};

type TCounterAction = {
  type: keyof TCounterStoreAction;
};

export type TCounterStore = TCounterStoreState & TCounterStoreAction;

const initialState = {
  count: 0,
};

const counterReducer = (state: TCounterStore, action: TCounterAction) => {
  switch (action.type) {
    case 'increaseCount':
      return { ...state, count: state.count + 1 };
    case 'decreaseCount':
      return { ...state, count: state.count - 1 };
    case 'result': {
      const count = state.count;
      return `current count is ${count}`;
    }
    default:
      return state;
  }
};

export const createCounterSlice: StateCreator<
  TCounterStore,
  [['zustand/immer', never], ['zustand/devtools', unknown]],
  []
> = (set, get) => {
  return {
    ...initialState,
    increaseCount: () =>
      set(
        (state: TCounterStore) => ({ count: state.count + 1 }),
        undefined,
        'counter/increaseCount'
      ),
    decreaseCount: () =>
      set(
        (state: TCounterStore) => ({ count: state.count - 1 }),
        undefined,
        'counter/decreaseCount'
      ),
    result: () => {
      return counterReducer(get(), { type: 'result' });
    },
  };
};
