import { combineReducers, createStore } from 'redux';
import { questionDetailsReducer, questionsReducer, formReducer, modalReducer } from './reducers';

const reducers = combineReducers({
  questions: questionsReducer,
  questionDetails: questionDetailsReducer,
  forms: formReducer,
  modal: modalReducer,
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
