import { Form } from '../store/reducers/forms/types';
import { Forms, Inputs } from './types';

export const form: Form = {
  [Forms.CREATE_NEW_QUESTION]: {
    [Inputs.TOPIC]: {
      value: '',
      error: '',
      isValid: false,
    },

    [Inputs.QUESTION]: {
      value: '',
      error: '',
      isValid: false,
    },
  },
};
