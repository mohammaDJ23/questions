import { ActionTypes, Error, Loading, Success } from './types';

export function loading(loading: string): Loading {
  return {
    type: ActionTypes.LOADING,
    payload: { loading },
  };
}

export function error(loading: string, error: string): Error {
  return {
    type: ActionTypes.ERROR,
    payload: { loading, error },
  };
}

export function success(loading: string): Success {
  return {
    type: ActionTypes.SUCCESS,
    payload: { loading },
  };
}
