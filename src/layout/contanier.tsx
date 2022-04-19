import { FC, PropsWithChildren } from 'react';
import Header from '../components/header';
import QuestionModal from '../components/question-modal';

const Container: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Header />
      <QuestionModal />

      <div className="root-container">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">{children}</div>
      </div>
    </>
  );
};

export default Container;
