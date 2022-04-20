export enum ActionTypes {
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}

export interface Loading {
  type: ActionTypes.LOADING;
  payload: { loading: string };
}

export interface Error {
  type: ActionTypes.ERROR;
  payload: { error: string; loading: string };
}

export interface Success {
  type: ActionTypes.SUCCESS;
  payload: { loading: string };
}

export type Actions = Loading | Error | Success;
