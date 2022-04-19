import { Form } from '../../reducers/forms/types';

export enum ActionTypes {
  ON_CHANGE = 'ON_CHANGE',
  ON_SUBMIT = 'ON_SUBMIT',
  SET_FORMS = 'SET_FORMS',
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

export interface SetForms {
  type: ActionTypes.SET_FORMS;
  payload: {
    forms: Form[];
  };
}

export type Actions = OnChange | OnSubmit | SetForms;
