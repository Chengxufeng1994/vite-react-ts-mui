export type Node = {
  id: number;
  hostIP: string;
  hostName: string;
  CPU: number;
  UsedCPU: number;
  Memory: number;
  UsedMemory: number;
  Disk: number;
  UsedDisk: number;
  GPUs: Gpu[];
};

export type Gpu = {
  id: number;
  ProductName: string;
  Memory: number;
  UsedMemory: number;
  InUsed: boolean;
  Status: string;
};
