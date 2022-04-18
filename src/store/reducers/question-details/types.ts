import { Question } from '../questions/types';

interface Comment {
  id: number;
  username: string;
  comment: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

interface Comments {
  questionId: number;
  comments: Comment[];
}

export interface State {
  question: Question | {};
  comments: Comments[];
}
