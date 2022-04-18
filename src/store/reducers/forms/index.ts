import { Actions, ActionTypes, OnChange, OnSubmit } from '../../actions/forms/types';
import { State } from './types';

const initialState: State = {
  forms: {},
};

function onChange(state: State, action: OnChange) {
  const { form, input, value } = action.payload;

  return {
    ...state,

    forms: {
      ...state.forms,

      [form]: {
        ...state.forms[form],

        [input]: {
          ...state.forms[form][input],

          value,
        },
      },
    },
  };
}

function onSubmit(state: State, action: OnSubmit) {
  return {
    ...state,
  };
}

export function formReducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ON_CHANGE:
      return onChange(state, action);

    case ActionTypes.ON_SUBMIT:
      return onSubmit(state, action);

    default:
      return state;
  }
}
