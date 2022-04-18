export interface Question {
  id: number;
  topic: string;
  question: string;
  createdAt: string;
  updatedAt: string;
}

export interface State {
  questions: Question[];
}
