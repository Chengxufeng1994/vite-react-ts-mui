const nodeEndpoints: Record<string, string | ((id: string) => string)> = {
  getNodes: '/nodes',
  getNode: (id: string) => `/nodes/${id}`,
};

export default nodeEndpoints;
