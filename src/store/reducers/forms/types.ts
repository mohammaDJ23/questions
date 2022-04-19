export interface Input {
  [key: string]: {
    value: string;
    error: string;
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
