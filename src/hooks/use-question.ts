import { useCallback, useState } from 'react';
import { getItemApis } from '../apis/get-item';
import { history } from '..';
import { Routes } from '../routes/types';
import { Rest } from '../services/rest';
import { QuestionParams } from '../store/actions/lists/types';
import { Items, Question } from '../store/reducers/lists/types';
import { History } from '../utility/history';
import { useAction } from './use-actions';

export function useQuestion() {
  const [question, setQuestion] = useState<Question | null>(null);
  const { loading, error, success } = useAction();

  const getQuestion = useCallback(async () => {
    try {
      const questionParams = History.matchPath<QuestionParams>(history.location.pathname, Routes.QUESTION);
      const data = { id: questionParams?.params?.id };
      loading(Items.QUESTION);
      const question = await Rest.req<Question>(getItemApis[Items.QUESTION](data));
      success(Items.QUESTION);
      setQuestion(question);
    } catch (err) {
      error(Items.QUESTION, (err as any).message);
    }
  }, [loading, error, success]);

  return { question, getQuestion, setQuestion };
}
