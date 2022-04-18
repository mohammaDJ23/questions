export enum ActionTypes {
  ON_CHANGE = 'ON_CHANGE',
  ON_SUBMIT = 'ON_SUBMIT',
}

export interface OnSubmit {
  type: ActionTypes.ON_SUBMIT;
  payload: {
    form: string;
  };
}

export interface OnChange {
  type: ActionTypes.ON_CHANGE;
  payload: {
    form: string;
    input: string;
    value: string;
  };
}

export type Actions = OnChange | OnSubmit;
