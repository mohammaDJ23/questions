import { Dispatch } from 'redux';
import { formApis } from '../../../apis/forms';
import { history } from '../../../App';
import { Forms, Inputs } from '../../../forms/types';
import { Comment } from '../../../model/comment';
import { Question } from '../../../model/question';
import { Routes } from '../../../routes/types';
import { Rest } from '../../../services/rest';
import { History } from '../../../utility/history';
import { Form, Input } from '../../reducers/forms/types';
import { Lists } from '../../reducers/lists/types';
import { RootState } from '../../store';
import { updateList } from '../lists';
import { QuestionParams } from '../lists/types';
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

function getInputs(form: Input) {
  const inputs: { [key: string]: string } = {};

  for (const input in form) {
    inputs[input] = form[input].value;
  }

  return inputs;
}

function beforeRequest(dispatch: Dispatch<RootActions>, state: RootState, formName: string) {
  const inputs = getInputs(state.forms.forms[formName]);

  switch (formName) {
    // getting new comment and merging with addintion infos

    case Forms.CREATE_NEW_COMMENT:
      const questionId = History.matchPath<QuestionParams>(history.location.pathname, Routes.QUESTION);
      return new Comment(questionId?.params?.id!, inputs[Inputs.COMMENT]);

    // getting new question and merging with addition infos

    case Forms.CREATE_NEW_QUESTION:
      return new Question(inputs[Inputs.TOPIC], inputs[Inputs.QUESTION]);

    default:
      return inputs;
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

    // adding new post to current list

    case Forms.CREATE_NEW_QUESTION:
      const questionList = state.lists.lists[Lists.QUESTIONS].list;
      questionList.push(data as Question);
      dispatch(updateList(Lists.QUESTIONS, questionList));
      break;
  }
}

async function formRequestProcess(dispatch: Dispatch<RootActions>, state: RootState, formName: string) {
  const formInfo = beforeRequest(dispatch, state, formName);
  const data = await Rest.req(formApis[formName](formInfo));
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
