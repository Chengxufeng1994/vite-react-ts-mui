import { nodeApi } from '@/api';

import { NodeService } from './service';

const nodeService = new NodeService(nodeApi);

export { nodeService };
