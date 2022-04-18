import { Dispatch } from 'redux';
import { RootState } from '../../store';
import { RootActions } from '../root-actions';
import { ActionTypes } from './types';

export function onSubmit(form: string) {
  return {
    type: ActionTypes.ON_SUBMIT,
    payload: {
      form,
    },
  };
}

export function onChange(form: string, input: string, value: string) {
  return {
    type: ActionTypes.ON_CHANGE,
    payload: {
      form,
      input,
      value,
    },
  };
}

export function submit(form: string) {
  return function (dispatch: Dispatch<RootActions>, state: () => RootState) {};
}
