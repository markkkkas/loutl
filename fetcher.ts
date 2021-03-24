export default (...args: [input: RequestInfo, init?: RequestInit | undefined]) =>
  fetch(...args).then((res) => res.json());
