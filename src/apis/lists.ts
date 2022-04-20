import { ReqInput } from '../services/types';
import { Lists } from '../store/reducers/lists/types';

export const listsApi: { [key: string]: (...args: any[]) => ReqInput<any> } = {
  [Lists.QUESTIONS]() {
    return {
      url: '/questions',
      method: 'GET',
    };
  },

  [Lists.COMMENTS](data) {
    return {
      url: `/comments?questionId=${data.questionId}`,
      method: 'GET',
    };
  },
};
