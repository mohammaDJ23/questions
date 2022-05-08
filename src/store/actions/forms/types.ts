import { Form } from '../../reducers/forms/types';

export enum ActionTypes {
  ON_CHANGE = 'ON_CHANGE',
  ON_SUBMIT = 'ON_SUBMIT',
  SET_FORMS = 'SET_FORMS',
  CLEAN_FORM = 'CLEAN_FORM',
  SET_FORM_INFO = 'SET_FORM_INFO',
}

export interface OnSubmit {
  type: ActionTypes.ON_SUBMIT;
}

export interface OnChange {
  type: ActionTypes.ON_CHANGE;
  payload: {
    value: string;
  };
}

export interface SetForms {
  type: ActionTypes.SET_FORMS;
  payload: {
    forms: Form[];
  };
}

export interface CleanForm {
  type: ActionTypes.CLEAN_FORM;
}

export interface SetFormInfo {
  type: ActionTypes.SET_FORM_INFO;
  payload: {
    form: string;
    input: string;
  };
}

export type Actions = OnChange | OnSubmit | SetForms | CleanForm | SetFormInfo;
