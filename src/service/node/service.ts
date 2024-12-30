import { nodeDtoToEntity } from '@/api/node/transform';

import type { NodeApi } from '@/api';
import type { Node } from '@/features/nodes/nodes.types';

export class NodeService {
  constructor(private api: NodeApi) {
    this.api = api;
  }

  async findNodes(): Promise<Node[]> {
    const nodesDto = await this.api.getNodes();
    return nodesDto.map(nodeDtoToEntity);
  }

  async getNode(id: string): Promise<Node> {
    const nodeDto = await this.api.getNode(id);
    return nodeDtoToEntity(nodeDto);
  }
}
