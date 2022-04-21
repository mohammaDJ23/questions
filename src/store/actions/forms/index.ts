import { Dispatch } from 'redux';
import { formApis } from '../../../apis/forms';
import { Forms } from '../../../forms/types';
import { Comment } from '../../../model/comment';
import { Rest } from '../../../services/rest';
import { Form, Input } from '../../reducers/forms/types';
import { Lists } from '../../reducers/lists/types';
import { RootState } from '../../store';
import { updateList } from '../lists';
import { error, loading, success } from '../loading';
import { RootActions } from '../root-actions';
import { ActionTypes } from './types';

export function submit(form: string) {
  return {
    type: ActionTypes.ON_SUBMIT,
    payload: {
      form,
    },
  };
}

export function onChange(form: string, input: string, value: unknown) {
  return {
    type: ActionTypes.ON_CHANGE,
    payload: {
      form,
      input,
      value,
    },
  };
}

export function setForms(forms: Form[]) {
  return {
    type: ActionTypes.SET_FORMS,
    payload: {
      forms,
    },
  };
}

function formOptimization(form: Input) {
  const inputs: { [key: string]: unknown } = {};

  for (const input in form) {
    inputs[input] = form[input].value;
  }

  return inputs;
}

function beforeRequest(formName: string, state: RootState) {
  switch (formName) {
    default:
      return formOptimization(state.forms.forms[formName]);
  }
}

function afterRequest(dispatch: Dispatch<RootActions>, state: RootState, formName: string, data: unknown) {
  switch (formName) {
    // adding new comment to current list

    case Forms.CREATE_NEW_COMMENT:
      const commentList = state.lists.lists[Lists.COMMENTS].list;
      commentList.push(data as Comment);
      dispatch(updateList(Lists.COMMENTS, commentList));
      break;
  }
}

async function formRequestProcess(dispatch: Dispatch<RootActions>, state: RootState, formName: string) {
  const optimizedForm = beforeRequest(formName, state);
  const data = await Rest.req(formApis[formName](optimizedForm));
  afterRequest(dispatch, state, formName, data);
}

export function onSubmit(formName: string) {
  return async function (dispatch: Dispatch<RootActions>, rootState: () => RootState) {
    try {
      const state = rootState();

      // prevent to sending new info when current request still is running
      // or the form is invalid

      if (state.loading.loadings[formName] || !state.forms.formValidation[formName]) {
        return;
      }

      dispatch(loading(formName));
      await formRequestProcess(dispatch, state, formName);
      dispatch(success(formName));
    } catch (err) {
      dispatch(error(formName, (err as any).message));
    }
  };
}
