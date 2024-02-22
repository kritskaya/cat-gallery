import axios, { AxiosResponse, AxiosError } from 'axios';
import { BASE_API_URL } from '../common/constants';
import { UNEXPECTED_ERROR } from '../common/messages';

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'x-api-key':
      'live_mFqwW0glEnFLkhovSbGw4VU1KW30KvmcdNMJH87PlNUdfTlGlLSuyl29Ux9jRowH',
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }

    console.log(UNEXPECTED_ERROR, error);

    throw error;
  }
);
