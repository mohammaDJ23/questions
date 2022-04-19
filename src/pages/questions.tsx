import { FC } from 'react';
import Questions from '../components/questions';
import Container from '../layout/contanier';

const QuestionsPage: FC = () => {
  return (
    <Container>
      <Questions />
    </Container>
  );
};

export default QuestionsPage;
