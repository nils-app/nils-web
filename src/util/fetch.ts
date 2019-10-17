import { useEffect, useState } from 'react';
import axios from 'axios';

export type FetchOptions = {
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  timeout?: number,
  data?: any,
};

type FetchReturn<T> = [
  boolean,
  T | null,
  string | null,
];

function useFetch<T>(defaultOptions: FetchOptions): FetchReturn<T> {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<T | null>(null);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        if (!defaultOptions.url) {
          throw new Error(`'url' is required for fetching data`);
        }

        const options = {
          ...defaultOptions,
          url: `http://nils.local${defaultOptions.url}`,
          timeout: defaultOptions.timeout || 3000,
        };

        console.log('fetch options', options);

        const response = await axios(options);
        const data: any = await response.data();

        setResponse(data);
      } catch (error) {
        console.warn('useFetch error', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    sendRequest();

  }, [defaultOptions]);

  return [loading, response, error];
};

export default useFetch;