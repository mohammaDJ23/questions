import { history } from '../App';
import { Forms } from '../forms/types';
import { Comment } from '../model/comment';
import { Routes } from '../routes/types';
import { ReqInput } from '../services/types';
import { QuestionParams } from '../store/actions/lists/types';
import { History } from '../utility/history';

export const formApis: { [key: string]: (...args: any[]) => ReqInput<any> } = {
  [Forms.CREATE_NEW_COMMENT](data) {
    const questionId = History.matchPath<QuestionParams>(history.location.pathname, Routes.QUESTION);
    const comment = new Comment(questionId?.params?.id!, data.comment);

    return {
      url: `/comments`,
      method: 'POST',
      data: comment,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  },
};
