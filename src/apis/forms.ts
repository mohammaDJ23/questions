import { history } from '../App';
import { Forms, Inputs } from '../forms/types';
import { Comment } from '../model/comment';
import { Question } from '../model/question';
import { Routes } from '../routes/types';
import { ReqInput } from '../services/types';
import { QuestionParams } from '../store/actions/lists/types';
import { History } from '../utility/history';

export const formApis: { [key: string]: (...args: any[]) => ReqInput<any> } = {
  [Forms.CREATE_NEW_COMMENT](data) {
    const questionId = History.matchPath<QuestionParams>(history.location.pathname, Routes.QUESTION);
    const comment = new Comment(questionId?.params?.id!, data[Inputs.COMMENT]);

    return {
      url: `/comments`,
      method: 'POST',
      data: comment,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },

  [Forms.CREATE_NEW_QUESTION](data) {
    const question = new Question(data[Inputs.TOPIC], data[Inputs.QUESTION]);

    return {
      url: '/questions',
      method: 'POST',
      data: question,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },
};
