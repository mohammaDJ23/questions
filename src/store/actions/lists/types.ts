export enum ActionTypes {
  GET_LIST = 'GET_LIST',
  CLEAN_LIST = 'CLEAN_LIST',
  UPDATE_LIST = 'UPDATE_LIST',
}

export interface GetList {
  type: ActionTypes.GET_LIST;
  payload: { listName: string; data: {}[] };
}

export interface CleanList {
  type: ActionTypes.CLEAN_LIST;
  payload: { listName: string };
}

export interface UpdateList {
  type: ActionTypes.UPDATE_LIST;
  payload: { listName: string; data: {}[] };
}

export type Actions = GetList | CleanList | UpdateList;

export interface QuestionParams {
  id?: string;
}
