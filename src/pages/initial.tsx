import { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { Routes } from '../routes/types';

const Initial: FC = () => {
  return <Redirect to={Routes.QUESTIONS} />;
};

export default Initial;
