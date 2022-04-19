import { FC } from 'react';
import Question from '../components/question';
import Container from '../layout/contanier';

const QuestionPage: FC = () => {
  return (
    <Container>
      <Question />
    </Container>
  );
};

export default QuestionPage;
