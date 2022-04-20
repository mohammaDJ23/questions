import { Actions as FormActions } from './forms/types';
import { Actions as QuestionDetailsActions } from './question-details/types';
import { Actions as QuestionsActions } from './lists/types';
import { Actions as ModalActions } from './modal/types';
import { Actions as LoadingActions } from './loading/types';

export type RootActions = FormActions | QuestionDetailsActions | QuestionsActions | ModalActions | LoadingActions;
