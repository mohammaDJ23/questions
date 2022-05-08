export interface Input {
  [key: string]: {
    value: any;
    error: string;
    isValid: boolean;
  };
}

export interface State {
  forms: {
    [key: string]: Input;
  };

  formValidation: {
    [key: string]: boolean;
  };

  currentForm: string;
  currentInput: string;
}

export type Form = State['forms'];
