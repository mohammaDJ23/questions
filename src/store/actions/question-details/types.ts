export enum ActionTypes {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
  GET_QUESTION = 'GET_QUESTION',
}

export interface Like {
  type: ActionTypes.LIKE;
}

export interface DisLike {
  type: ActionTypes.DISLIKE;
}

export interface GetQuestion {
  type: ActionTypes.GET_QUESTION;
}

export type Actions = Like | DisLike | GetQuestion;
