import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

export type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type FetchError = {
  status: number,
  message: string,
};

type FetchReturn<T> = [
  boolean,
  T | null,
  FetchError | null,
];

axios.defaults.withCredentials = true;

function useFetch<T>(path: string, method: FetchMethod, body?: any): FetchReturn<T> {
  const [error, setError] = useState<FetchError | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<T | null>(null);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        if (!path) {
          throw new Error(`'url' is required for fetching data`);
        }

        const url = `http://nils.local${path}`;
        const options: AxiosRequestConfig = {
          url,
          method,
          data: body,
          timeout: 6000,
          withCredentials: true,
          xsrfHeaderName: 'X-CSRF-Token'
        };

        console.log('fetch options', options);

        const response = await axios(options);
        console.log('fetch response', response);

        const data: any = await response.data;

        setResponse(data);
      } catch (error) {
        if (error.response) {
          console.warn('useFetch error', error.response);
          const returnError: FetchError = {
            status: error.response.status,
            message: error.message,
          };
          setError(returnError);
        } else {
          console.warn('useFetch error', error);
          const returnError: FetchError = {
            status: 500,
            message: error.message,
          };
          setError(returnError);
        }
      } finally {
        setLoading(false);
      }
    };

    sendRequest();

  }, [path, method, body]);

  return [loading, response, error];
};

export default useFetch;