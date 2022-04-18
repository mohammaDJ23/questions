import Initial from '../pages/initial';
import QuestionsPage from '../pages/questions';
import QuestionPage from '../pages/question';
import { Paths } from '../types';

export default [
  { path: '/questions', component: QuestionsPage },
  { path: '/question/:id', component: QuestionPage },
  { path: '/', component: Initial },
] as Paths;
