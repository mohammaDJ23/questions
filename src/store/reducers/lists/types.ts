export enum Lists {
  QUESTIONS = 'QUESTIONS',
  COMMENTS = 'COMMENTS',
}

export enum UpdateOperation {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

export interface Question {
  id: string;
  topic: string;
  question: string;
  createdAt: string;
  updatedAt: string;
  comments?: Comment[];
}

export interface Comment {
  id: string;
  questionId: string;
  username: string;
  comment: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

export interface State {
  lists: {
    [key: string]: {
      list: {}[];
      count: number;
    };
  };
}
