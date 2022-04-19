import { FC, PropsWithChildren } from 'react';
import Header from '../components/header';

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header /> {children}
    </div>
  );
};

export default Container;
