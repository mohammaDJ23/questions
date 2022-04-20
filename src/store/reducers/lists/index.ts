import { Actions, ActionTypes, GetList } from '../../actions/lists/types';
import { State } from './types';

const initialState: State = {
  lists: {},
};

function getList(state: State, action: GetList) {
  const { data, listType } = action.payload;

  return {
    ...state,

    lists: {
      ...state.lists,

      [listType]: data,
    },
  };
}

export function listsReducer(state: State = initialState, actions: Actions) {
  switch (actions.type) {
    case ActionTypes.GET_LIST:
      return getList(state, actions);

    default:
      return state;
  }
}
