import { useContext } from 'react';

import { NodeContext } from '@/contexts/node/context';

export const useNodeContext = () => useContext(NodeContext);
