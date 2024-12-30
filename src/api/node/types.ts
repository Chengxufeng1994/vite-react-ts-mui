export type NodeDto = {
  id: number;
  hostIP: string;
  hostName: string;
  UserAccount: string;
  SuperUserAccount: string;
  CPU: number;
  UsedCPU: number;
  Memory: number;
  UsedMemory: number;
  Disk: number;
  UsedDisk: number;
  Status: string;
  Valid: boolean;
  GPUs: GpuDto[];
  CreatedAt: string;
  UpdatedAt: string;
};

export type GpuDto = {
  id: number;
  ProductName: string;
  Memory: number;
  UsedMemory: number;
  InUsed: boolean;
  Status: string;
};
