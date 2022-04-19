export interface Input {
  [key: string]: {
    value: string;
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
}

export type Form = State['forms'];
