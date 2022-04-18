import { Actions as FormActions } from './forms/types';
import { Actions as QuestionDetailsActions } from './question-details/types';
import { Actions as QuestionsActions } from './questions/types';

export type RootActions = FormActions | QuestionDetailsActions | QuestionsActions;
