import { AxiosError } from 'axios';
import { API_ITEMS_LIMIT } from '../common/constants';
import { api } from './config';
import { GetCatsResponse } from './types';

export const getCats = async (page = 0, limit = API_ITEMS_LIMIT) => {
  return await api.get<AxiosError, GetCatsResponse>('/', {
    params: {
      page: page,
      limit: limit,
      order: 'ASC',
      has_breeds: 1,
    },
  });
};
