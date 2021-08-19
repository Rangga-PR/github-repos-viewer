import { useCallback, useEffect, useState } from "react";

function useFetch(url: string, options?: Object, auto = false) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fire = useCallback(() => {
    setLoading(true);
    setError(null);
    setResponse(null);

    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setLoading(false);
        setResponse(json);
        res?.ok || setError(json);
        res?.ok ? resolve(json) : reject(json);
      } catch (error) {
        setLoading(false);
        setError(error);
        reject(error);
      }
    });
  }, [url, options]);

  useEffect(() => {
    auto && fire();
  }, [auto, fire]);

  return { response, error, loading, fire };
}

export default useFetch;
