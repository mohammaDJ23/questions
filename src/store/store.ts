import { combineReducers, createStore } from 'redux';
import { questionDetailsReducer, questionsReducer, formReducer } from './reducers';

const reducers = combineReducers({
  questions: questionsReducer,
  questionDetails: questionDetailsReducer,
  forms: formReducer,
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
