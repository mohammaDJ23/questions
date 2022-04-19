import Initial from '../pages/initial';
import QuestionsPage from '../pages/questions';
import QuestionPage from '../pages/question';
import { Paths, Routes } from './types';

export default [
  { path: Routes.QUESTIONS, component: QuestionsPage },
  { path: Routes.QUESTION, component: QuestionPage },
  { path: Routes.INITIAL, component: Initial },
] as Paths;
