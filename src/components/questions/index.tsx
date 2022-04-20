import { FC, useEffect } from 'react';
import { form as createNewQuestion } from '../../forms/create-new-quesion';
import { useAction } from '../../hooks/use-actions';
import { Lists } from '../../types';
import List from './list';

const Index: FC = () => {
  const { setForms, getList } = useAction();

  useEffect(() => {
    setForms([createNewQuestion]);
    getList(Lists.QUESTIONS);
  }, []);

  return <List />;
};

export default Index;
