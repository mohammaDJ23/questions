import { Forms } from '../forms/types';
import { ReqInput } from '../services/types';

export const formApis: { [key: string]: (...args: any[]) => ReqInput<any> } = {
  [Forms.CREATE_NEW_COMMENT](data) {
    return {
      url: `/comments`,
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },

  [Forms.CREATE_NEW_QUESTION](data) {
    return {
      url: '/questions',
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },
};
