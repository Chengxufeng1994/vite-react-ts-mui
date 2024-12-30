import React from 'react';

interface NodeContextType {
  nodeId?: string;
}

type NodeContextProviderProps = {
  children: React.ReactNode;
};

export type { NodeContextProviderProps, NodeContextType };
