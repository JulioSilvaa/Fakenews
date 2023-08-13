import { useEffect, useState } from 'react';

import { IUser } from '@/interfaces';
import newsApi from '@/service/newsApiV2';

const useAuth = (url: string, options?: object) => {
  const [data, setData] = useState<IUser | null>(null);
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

  useEffect(() => {
    authUser();
  }, [url, options]);

  return { data, loading, error };
};

export default useAuth;
