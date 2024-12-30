import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import { NodeContext } from './context';
import { useNodeContext } from './useNodeContext';
import type { NodeContextProviderProps } from './types';

const NodeContextProvider: React.FC<NodeContextProviderProps> = ({ children }) => {
  const { nodeId } = useParams();
  const { nodeId: nodeIdFromContext } = useNodeContext();

  useEffect(() => {
    console.log('NodeContextProvider', nodeId);
    console.log('NodeContextProviderFromNodeContext', nodeIdFromContext);
  }, [nodeId, nodeIdFromContext]);

  return <NodeContext.Provider value={{}}>{children}</NodeContext.Provider>;
};

export default NodeContextProvider;
