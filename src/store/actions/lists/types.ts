export enum ActionTypes {
  GET_LIST = 'GET_LIST',
}

export interface GetList {
  type: ActionTypes.GET_LIST;
  payload: { listType: string; data: {}[] };
}

export type Actions = GetList;
