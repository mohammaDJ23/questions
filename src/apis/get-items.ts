import { Items } from '../store/reducers/lists/types';
import { ReqInput } from '../services/types';

export const getItemApis: { [key: string]: (...args: any[]) => ReqInput<any> } = {
  [Items.QUESTION](data) {
    return {
      url: `/questions/${data.id}`,
      method: 'GET',
    };
  },
};
