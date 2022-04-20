import { ReqInput } from '../services/types';
import { UpdateOperation } from '../store/reducers/lists/types';

export const udpateItemApis: { [key: string]: (...args: any[]) => ReqInput<any> } = {
  [UpdateOperation.LIKE](data) {
    return {
      url: `/comments/${data.id}/`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
  },

  [UpdateOperation.DISLIKE](data) {
    return {
      url: `/comments/${data.id}/`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
  },
};
