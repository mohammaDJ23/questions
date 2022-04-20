export enum ActionTypes {
  GET_LIST = 'GET_LIST',
  CLEAN_LIST = 'CLEAN_LIST',
}

export interface GetList {
  type: ActionTypes.GET_LIST;
  payload: { listName: string; data: {}[] };
}

export interface CleanList {
  type: ActionTypes.CLEAN_LIST;
  payload: { listName: string };
}

export type Actions = GetList | CleanList;

export interface QuestionParams {
  id?: string;
}
