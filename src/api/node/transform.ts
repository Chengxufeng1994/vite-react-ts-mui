import type { NodeDto, GpuDto } from './types';
import type { Node, Gpu } from '@/features/nodes/nodes.types';

export function nodeDtoToEntity(dto: NodeDto): Node {
  return {
    id: dto.id,
    hostIP: dto.hostIP,
    hostName: dto.hostName,
    CPU: dto.CPU,
    UsedCPU: dto.UsedCPU,
    Memory: dto.Memory,
    UsedMemory: dto.UsedMemory,
    Disk: dto.Disk,
    UsedDisk: dto.UsedDisk,
    GPUs: dto.GPUs.map(gpuDtoToEntity),
  };
}

export function gpuDtoToEntity(dto: GpuDto): Gpu {
  return {
    id: dto.id,
    ProductName: dto.ProductName,
    Memory: dto.Memory,
    UsedMemory: dto.UsedMemory,
    InUsed: dto.InUsed,
    Status: dto.Status,
  };
}
