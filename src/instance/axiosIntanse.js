import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://test.kz',
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvblVzZXJJZCI6IjZiY2VmZTk1LTlkOGQtNGNkMy1iNjY0LWQyYWVhYjFhZTA4NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImNsaWVudHNVc2VyIiwiZXhwIjoxNjQwMzQ3OTkyLCJpc3MiOiJodHRwczovL3Rlc3RhcGkuYmktZ3JvdXAub3JnIiwiYXVkIjoiaHR0cHM6Ly90ZXN0YXBpLmJpLWdyb3VwLm9yZyJ9.7_mbB2tH-v27SA-RP2tFIVFKdBBRby69PnxmeC3T3B0';

export const interceptorInstance = (store) => {
  const { dispatch } = store;
  api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers.Accept = 'application/json';
    }
    return config;
  });

  api.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response) {
        //error message dispatch
      }

      return Promise.reject(err);
    }
  );
};
