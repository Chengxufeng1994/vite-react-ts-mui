import { NodeDto } from './types';

export interface NodeApi {
  getNodes(): Promise<NodeDto[]>;
  getNode(id: string): Promise<NodeDto>;
}
