import { v4 as uuid } from 'uuid';
import Fakerator from 'fakerator';
import { Comment as CommentType } from '../store/reducers/lists/types';

const fakerator = Fakerator();

export class Comment implements CommentType {
  public username: string;
  public likes: number;
  public dislikes: number;
  public createdAt: string;
  public updatedAt: string;
  public id: string;

  constructor(public questionId: string, public comment: string) {
    this.id = uuid();
    this.questionId = questionId;
    this.username = fakerator.names.name();
    this.comment = comment;
    this.likes = 0;
    this.dislikes = 0;
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }
}
