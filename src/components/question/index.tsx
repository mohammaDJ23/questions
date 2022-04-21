import { useEffect, FC } from 'react';
import { form as createNewComment } from '../../forms/create-new-comment';
import { form as createNewQuestion } from '../../forms/create-new-quesion';
import { useAction } from '../../hooks/use-actions';
import { useQuestion } from '../../hooks/use-question';
import { Lists } from '../../store/reducers/lists/types';
import Answers from './answers';
import CreateComment from './create-comment';
import Question from './question';

const Index: FC = () => {
  const { setForms, getList, cleanList } = useAction();
  const { question, getQuestion, setQuestion } = useQuestion();

  useEffect(() => {
    setForms([createNewComment, createNewQuestion]);
    Promise.all([getList(Lists.COMMENTS), getQuestion()]);

    return () => {
      cleanList(Lists.COMMENTS);
      setQuestion(null);
    };
  }, []);

  return (
    <>
      <Question question={question} />
      <Answers />
      <CreateComment />
    </>
  );
};

export default Index;
