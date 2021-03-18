export function generateValidPath(path: string, endpoint: string) {
  const validEndpoint = endpoint.toLocaleLowerCase().replace(' ', '_');
  return `/${path}/${validEndpoint}`;
}
