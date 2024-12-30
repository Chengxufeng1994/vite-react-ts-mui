import type { NodeDto } from './types';

const mockNodesData: NodeDto[] = [
  {
    id: 1,
    hostIP: '10.1.1.1',
    hostName: 'master',
    UserAccount: 'root',
    SuperUserAccount: 'root',
    CPU: 64,
    UsedCPU: 8,
    Memory: 128,
    UsedMemory: 8,
    Disk: 512,
    UsedDisk: 127,
    Status: 'Active',
    Valid: true,
    GPUs: [
      {
        id: 1,
        ProductName: 'NVIDIAGeForce RTX 2080',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
      {
        id: 2,
        ProductName: 'NVIDIAGeForce RTX 3080',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
      {
        id: 3,
        ProductName: 'NVIDIAGeForce RTX 4080',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
    ],
    CreatedAt: '2025-01-01 00:00:00',
    UpdatedAt: '2025-01-01 00:00:00',
  },
  {
    id: 2,
    hostIP: '10.1.1.2',
    hostName: 'worker-1',
    UserAccount: 'root',
    SuperUserAccount: 'root',
    CPU: 32,
    UsedCPU: 8,
    Memory: 128,
    UsedMemory: 8,
    Disk: 512,
    UsedDisk: 127,
    Status: 'Active',
    Valid: true,
    GPUs: [
      {
        id: 1,
        ProductName: 'NVIDIAGeForce RTX 2070',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
      {
        id: 2,
        ProductName: 'NVIDIAGeForce RTX 3070',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
      {
        id: 3,
        ProductName: 'NVIDIAGeForce RTX 4070',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
    ],
    CreatedAt: '2025-01-01 00:00:00',
    UpdatedAt: '2025-01-01 00:00:00',
  },
  {
    id: 3,
    hostIP: '10.1.1.3',
    hostName: 'worker-2',
    UserAccount: 'root',
    SuperUserAccount: 'root',
    CPU: 32,
    UsedCPU: 8,
    Memory: 128,
    UsedMemory: 8,
    Disk: 512,
    UsedDisk: 127,
    Status: 'Active',
    Valid: true,
    GPUs: [
      {
        id: 1,
        ProductName: 'NVIDIAGeForce RTX 2060',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
      {
        id: 2,
        ProductName: 'NVIDIAGeForce RTX 3060',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
      {
        id: 3,
        ProductName: 'NVIDIAGeForce RTX 4060',
        Memory: 24,
        UsedMemory: 8,
        InUsed: true,
        Status: 'Active',
      },
    ],
    CreatedAt: '2025-01-01 00:00:00',
    UpdatedAt: '2025-01-01 00:00:00',
  },
];

class Nodes {
  async getNodes(): Promise<NodeDto[]> {
    return new Promise(resolve => {
      resolve(mockNodesData);
    });
  }

  async getNode(id: string): Promise<NodeDto> {
    for (const node of mockNodesData) {
      if (node.id.toString() === id) {
        return node;
      }
    }

    return {
      id: 0,
      hostIP: '',
      hostName: '',
      UserAccount: '',
      SuperUserAccount: '',
      CPU: 0,
      UsedCPU: 0,
      Memory: 0,
      UsedMemory: 0,
      Disk: 0,
      UsedDisk: 0,
      Status: '',
      Valid: false,
      GPUs: [],
      CreatedAt: '',
      UpdatedAt: '',
    };
  }
}

const nodeApi = new Nodes();

export { nodeApi };
