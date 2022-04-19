import { FC, useEffect } from 'react';
import { form as createNewQuestion } from '../../forms/create-new-quesion';
import { useAction } from '../../hooks/use-actions';
import List from './list';

const Index: FC = () => {
  const { setForms } = useAction();

  useEffect(() => {
    setForms([createNewQuestion]);
  }, []);

  return <List />;
};

export default Index;
