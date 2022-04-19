import { Form } from '../store/reducers/forms/types';
import { Forms, Inputs } from './types';

export const form: Form = {
  [Forms.CREATE_NEW_COMMENT]: {
    [Inputs.COMMENT]: {
      value: '',
      error: '',
      isValid: false,
    },
  },
};
