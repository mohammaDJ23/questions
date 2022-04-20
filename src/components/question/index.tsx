import { useEffect, FC } from 'react';
import { form as createNewComment } from '../../forms/create-new-comment';
import { form as createNewQuestion } from '../../forms/create-new-quesion';
import { useAction } from '../../hooks/use-actions';
import { Lists } from '../../store/reducers/lists/types';
import Answers from './answers';
import CreateComment from './create-comment';
import Question from './question';

const Index: FC = () => {
  const { setForms, getList, cleanList } = useAction();

  useEffect(() => {
    setForms([createNewComment, createNewQuestion]);
    getList(Lists.COMMENTS);

    return () => {
      cleanList(Lists.COMMENTS);
    };
  }, []);

  return (
    <>
      <Question />
      <Answers />
      <CreateComment />
    </>
  );
};

export default Index;
