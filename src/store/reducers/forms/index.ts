import { inputValidation, isFormValid } from '../../../utility/validations';
import { Actions, ActionTypes, CleanForm, OnChange, OnSubmit, SetForms } from '../../actions/forms/types';
import { State } from './types';

const initialState: State = {
  forms: {},
  formValidation: {},
};

function onChange(state: State, action: OnChange) {
  const { form, input, value } = action.payload;
  const { error, isValid } = inputValidation(form, input, value);

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
          isValid,
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
  let newState = { ...state };

  for (const form of action.payload.forms) {
    Object.assign(newState.forms, form);
    Object.assign(newState.formValidation, { [Object.keys(form)[0]]: false });
  }

  return newState;
}

function getPlainValue(value: unknown) {
  return typeof value === 'boolean'
    ? false
    : typeof value === 'string'
    ? ''
    : typeof value === 'number'
    ? 0
    : value instanceof Array
    ? []
    : value instanceof Object
    ? {}
    : null;
}

function cleanForm(state: State, action: CleanForm) {
  const { form } = action.payload;
  const newState = { ...state };

  for (const input in newState.forms[form]) {
    newState.forms[form][input].value = getPlainValue(newState.forms[form][input].value);
    newState.forms[form][input].isValid = false;
    newState.forms[form][input].error = '';
  }

  newState.formValidation[form] = false;

  return newState;
}

export function formReducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ON_CHANGE:
      return onChange(state, action);

    case ActionTypes.ON_SUBMIT:
      return onSubmit(state, action);

    case ActionTypes.SET_FORMS:
      return setForms(state, action);

    case ActionTypes.CLEAN_FORM:
      return cleanForm(state, action);

    default:
      return state;
  }
}
