import { FC, PropsWithChildren } from 'react';
import Header from '../components/header';

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </>
  );
};

export default Container;
