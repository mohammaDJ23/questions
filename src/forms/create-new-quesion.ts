import { Forms, Inputs } from './types';

export const form = {
  [Forms.CREATE_NEW_QUESTION]: {
    [Inputs.TOPIC]: {
      value: '',
      error: '',
    },

    [Inputs.QUESTION]: {
      value: '',
      error: '',
    },
  },
};
