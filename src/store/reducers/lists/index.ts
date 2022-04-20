import { Actions, ActionTypes, CleanList, GetList, UpdateList } from '../../actions/lists/types';
import { State } from './types';

const initialState: State = {
  lists: {},
};

function getList(state: State, action: GetList) {
  const { data, listName } = action.payload;

  return {
    ...state,

    lists: {
      ...state.lists,

      [listName]: {
        ...state.lists[listName],

        list: data,
        count: data.length,
      },
    },
  };
}

function cleanList(state: State, action: CleanList) {
  const newState = { ...state };
  const { listName } = action.payload;
  delete newState.lists[listName];
  return newState;
}

function updateList(state: State, action: UpdateList) {
  const { data, listName } = action.payload;

  return {
    ...state,

    lists: {
      ...state.lists,

      [listName]: {
        ...state.lists[listName],

        list: data,
      },
    },
  };
}

export function listsReducer(state: State = initialState, actions: Actions) {
  switch (actions.type) {
    case ActionTypes.GET_LIST:
      return getList(state, actions);

    case ActionTypes.CLEAN_LIST:
      return cleanList(state, actions);

    case ActionTypes.UPDATE_LIST:
      return updateList(state, actions);

    default:
      return state;
  }
}
