export interface State {
  forms: {
    [key: string]: {
      [key: string]: {
        value: string;
        error: string;
      };
    };
  };
}
