const fetcher = (...args: [input: RequestInfo, init?: RequestInit | undefined]) =>
  fetch(...args).then((res) => res.json());

export default fetcher;
