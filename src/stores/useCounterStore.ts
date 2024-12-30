import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { TCounterStore, createCounterSlice } from '@/features/counter/counterSlice';

const useCounterStore = create<TCounterStore>()(
  immer(
    devtools(
      (...args) => ({
        ...createCounterSlice(...args),
      }),
      {
        enabled: true,
        name: 'counter store',
      }
    )
  )
);
export default useCounterStore;
