import { createContext } from 'react';

import type { NodeContextType } from './types';

export const NodeContext = createContext<NodeContextType>({});
