import { ReqInput } from '../services/types';
import { Lists } from '../types';

export const listsApi: { [key: string]: (...args: any[]) => ReqInput<any> } = {
  [Lists.QUESTIONS]() {
    return {
      url: '/questions',
      method: 'GET',
    };
  },
};
