import { useState } from 'react';

import newsApi from '@/service/newsApiV2';

function useAuth<T>(url: string, options?: object) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const authUser = () => {
    setLoading(true);
    newsApi
      .post(url, options)
      .then((res) => {
        setData(res.data);
        localStorage.setItem('token', res.data.token);
        setLoading(false);
      })
      .catch((err) => setError(err));
  };

  return { data, loading, error, authUser };
}

export default useAuth;
