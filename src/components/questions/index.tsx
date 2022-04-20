import { FC, useEffect } from 'react';
import { form as createNewQuestion } from '../../forms/create-new-quesion';
import { useAction } from '../../hooks/use-actions';
import { Lists } from '../../store/reducers/lists/types';
import List from './list';

const Index: FC = () => {
  const { setForms, getList, cleanList } = useAction();

  useEffect(() => {
    setForms([createNewQuestion]);
    getList(Lists.QUESTIONS);

    return () => {
      cleanList(Lists.QUESTIONS);
    };
  }, []);

  return <List />;
};

export default Index;
