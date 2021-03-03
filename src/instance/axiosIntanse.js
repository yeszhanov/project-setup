import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://test.kz',
});

export const interceptorInstance = (store) => {
  const { dispatch } = store;
  api.interceptors.request.use((config) => {
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
