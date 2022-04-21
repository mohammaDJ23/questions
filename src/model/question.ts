import { v4 as uuid } from 'uuid';
import { Question as QuestionType } from '../store/reducers/lists/types';

export class Question implements QuestionType {
  public id: string;
  public createdAt: string;
  public updatedAt: string;

  constructor(public topic: string, public question: string) {
    this.topic = topic;
    this.question = question;
    this.id = uuid();
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}
