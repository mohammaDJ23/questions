import { Dispatch } from 'redux';
import { Form } from '../../reducers/forms/types';
import { RootState } from '../../store';
import { RootActions } from '../root-actions';
import { ActionTypes } from './types';

export function submit(form: string) {
  return {
    type: ActionTypes.ON_SUBMIT,
    payload: {
      form,
    },
  };
}

export function onChange(form: string, input: string, value: unknown) {
  return {
    type: ActionTypes.ON_CHANGE,
    payload: {
      form,
      input,
      value,
    },
  };
}

export function setForms(forms: Form[]) {
  return {
    type: ActionTypes.SET_FORMS,
    payload: {
      forms,
    },
  };
}

export function onSubmit(form: string) {
  return function (dispatch: Dispatch<RootActions>, state: () => RootState) {};
}
