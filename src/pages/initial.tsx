import { FC } from 'react';
import { Redirect } from 'react-router-dom';

const Initial: FC = () => {
  return <Redirect to={'/questions'} />;
};

export default Initial;
