import { useEffect, useState } from "react";

const useFetch = (initial, endpoint) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const data = fetch(endpoint);
    data
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [endpoint]);

  return [data];
};

export default useFetch;
