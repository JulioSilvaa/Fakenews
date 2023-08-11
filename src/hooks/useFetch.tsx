import { useEffect, useRef, useState } from 'react';

import newsApi from '@/service/newsApiV2';

function useFetch<T>(url: string, options?: object) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getAllNews = () => {
      setLoading(true);
      newsApi
        .get(url, { signal, ...optionsRef.current })
        .then((res) => setData(res.data))
        .catch((err) => setError(err.message));
    };
    getAllNews();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
