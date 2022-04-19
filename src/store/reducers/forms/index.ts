import { inputValidation, isFormValid } from '../../../utility/validations';
import { Actions, ActionTypes, OnChange, OnSubmit, SetForms } from '../../actions/forms/types';
import { State } from './types';

const initialState: State = {
  forms: {},
  formValidation: {},
};

function onChange(state: State, action: OnChange) {
  const { form, input, value } = action.payload;
  const { error } = inputValidation(form, input, value);

  const newState = {
    ...state,

    forms: {
      ...state.forms,

      [form]: {
        ...state.forms[form],

        [input]: {
          ...state.forms[form][input],

          value,
          error,
        },
      },
    },
  };

  newState.formValidation[form] = isFormValid(newState.forms[form]);

  return newState;
}

function onSubmit(state: State, action: OnSubmit) {
  return {
    ...state,
  };
}

function setForms(state: State, action: SetForms) {
  for (const form of action.payload.forms) {
    Object.assign(state.forms, form);
    Object.assign(state.formValidation, { [Object.keys(form)[0]]: false });
  }

  return state;
}

export function formReducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ON_CHANGE:
      return onChange(state, action);

    case ActionTypes.ON_SUBMIT:
      return onSubmit(state, action);

    case ActionTypes.SET_FORMS:
      return setForms(state, action);

    default:
      return state;
  }
}
