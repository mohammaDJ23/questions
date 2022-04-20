export enum ActionTypes {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

export interface Like {
  type: ActionTypes.LIKE;
}

export interface DisLike {
  type: ActionTypes.DISLIKE;
}

export type Actions = Like | DisLike;
