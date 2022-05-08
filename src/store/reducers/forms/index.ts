import { inputValidation, isFormValid } from '../../../utility/validations';
import { Actions, ActionTypes, OnChange, OnSubmit, SetFormInfo, SetForms } from '../../actions/forms/types';
import { State } from './types';

const initialState: State = {
  forms: {},
  formValidation: {},
  currentForm: '',
  currentInput: '',
};

function onChange(state: State, action: OnChange) {
  const { value } = action.payload;
  const { error, isValid } = inputValidation(state.currentForm, state.currentInput, value);

  const newState = {
    ...state,

    forms: {
      ...state.forms,

      [state.currentForm]: {
        ...state.forms[state.currentForm],

        [state.currentInput]: {
          ...state.forms[state.currentForm][state.currentInput],

          value,
          error,
          isValid,
        },
      },
    },
  };

  newState.formValidation[state.currentForm] = isFormValid(newState.forms[state.currentForm]);

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

function cleanForm(state: State) {
  const newState = { ...state };

  for (const input in newState.forms[newState.currentForm]) {
    newState.forms[newState.currentForm][input].value = getPlainValue(
      newState.forms[newState.currentForm][input].value,
    );

    newState.forms[newState.currentForm][input].isValid = false;
    newState.forms[newState.currentForm][input].error = '';
  }

  newState.formValidation[newState.currentForm] = false;

  return newState;
}

function setFormInfo(state: State, action: SetFormInfo) {
  const { form, input } = action.payload;

  return {
    ...state,
    currentForm: form,
    currentInput: input,
  };
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
      return cleanForm(state);

    case ActionTypes.SET_FORM_INFO:
      return setFormInfo(state, action);

    default:
      return state;
  }
}
