import { useEffect, FC } from 'react';
import { form as createNewComment } from '../../forms/create-new-comment';
import { form as createNewQuestion } from '../../forms/create-new-quesion';
import { useAction } from '../../hooks/use-actions';
import Answers from './answers';
import Question from './question';

const Index: FC = () => {
  const { setForms } = useAction();

  useEffect(() => {
    setForms([createNewComment, createNewQuestion]);
  }, []);

  return (
    <>
      <Question />
      <Answers />
    </>
  );
};

export default Index;
