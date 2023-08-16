import axios from 'axios';

const api = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
  });

  // Intercept request before it's sent
  instance.interceptors.request.use(
    (config) => {
      // Check if there's a file in the request data
      if (config.data instanceof FormData) {
        // If it's FormData (file upload), set appropriate headers
        config.headers['Content-Type'] = 'multipart/form-data';
      } else {
        // Otherwise, set default JSON headers
        config.headers['Content-Type'] = 'application/json';
      }

      // Add authorization header
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export default api;
