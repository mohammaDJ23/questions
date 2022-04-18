import { combineReducers, createStore } from 'redux';
import { questionDetailsReducer, questionsReducer } from './reducers';

const reducers = combineReducers({
  questions: questionsReducer,
  questionDetails: questionDetailsReducer,
});

export const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;
