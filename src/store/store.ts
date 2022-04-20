import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { listsReducer, formReducer, modalReducer, loadingReducer } from './reducers';

const reducers = combineReducers({
  lists: listsReducer,
  forms: formReducer,
  modal: modalReducer,
  loading: loadingReducer,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;
