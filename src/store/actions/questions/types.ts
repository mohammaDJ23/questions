export enum ActionTypes {
  GET_QUESTIONS = 'GET_QUESTIONS',
}

export interface GetQuestions {
  type: ActionTypes.GET_QUESTIONS;
}

export type Actions = GetQuestions;
