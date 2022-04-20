export enum Lists {
  QUESTIONS = 'QUESTIONS',
  COMMENTS = 'COMMENTS',
}

export enum UpdateOperation {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

export interface Question {
  id: number;
  topic: string;
  question: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  questionId: number;
  username: string;
  comment: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

export interface Comments {
  questionId: number;
  comments: Comment[];
}

export interface State {
  lists: {
    [key: string]: {
      list: {}[];
      count: number;
    };
  };
}
