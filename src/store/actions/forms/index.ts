import { Dispatch } from 'redux';
import { formApis } from '../../../apis/forms';
import { history } from '../../..';
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
import { ActionTypes, CleanForm, OnSubmit } from './types';
import { showModal } from '../modal';

export function setFormInfo(form: string, input: string) {
  return {
    type: ActionTypes.SET_FORM_INFO,
    payload: { form, input },
  };
}

export function submit(): OnSubmit {
  return {
    type: ActionTypes.ON_SUBMIT,
  };
}

export function onChange(value: unknown) {
  return {
    type: ActionTypes.ON_CHANGE,
    payload: {
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

export function cleanForm(): CleanForm {
  return {
    type: ActionTypes.CLEAN_FORM,
  };
}

function getInputs(form: Input) {
  const inputs: { [key: string]: any } = {};

  for (const input in form) {
    inputs[input] = form[input].value;
  }

  return inputs;
}

function beforeRequest(dispatch: Dispatch<RootActions>, state: RootState) {
  const inputs = getInputs(state.forms.forms[state.forms.currentForm]);

  switch (state.forms.currentForm) {
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

function afterRequest(dispatch: Dispatch<RootActions>, state: RootState, data: unknown) {
  switch (state.forms.currentForm) {
    // adding new comment to current list

    case Forms.CREATE_NEW_COMMENT:
      const commentList = state.lists.lists[Lists.COMMENTS].list;
      commentList.unshift(data as Comment);
      dispatch(updateList(Lists.COMMENTS, commentList));
      dispatch(cleanForm());
      break;

    // adding new post to current list

    case Forms.CREATE_NEW_QUESTION:
      if (history.location.pathname === Routes.QUESTIONS) {
        const questionList = state.lists.lists[Lists.QUESTIONS].list;
        questionList.unshift(data as Question);
        dispatch(updateList(Lists.QUESTIONS, questionList));
      } else {
        // if the creation of the question was inside the question page
        // redirec the user to questions page

        history.push(Routes.QUESTIONS);
      }

      dispatch(cleanForm());
      dispatch(showModal(false));
      break;
  }
}

async function formRequestProcess(dispatch: Dispatch<RootActions>, state: RootState) {
  const formInfo = beforeRequest(dispatch, state);
  const data = await Rest.req(formApis[state.forms.currentForm](formInfo));
  afterRequest(dispatch, state, data);
}

export function onSubmit() {
  return async function (dispatch: Dispatch<RootActions>, rootState: () => RootState) {
    const state = rootState();

    try {
      // prevent to sending new info when current request still is running
      // or the form is invalid

      if (state.loading.loadings[state.forms.currentForm] || !state.forms.formValidation[state.forms.currentForm]) {
        return;
      }

      dispatch(loading(state.forms.currentForm));
      await formRequestProcess(dispatch, state);
      dispatch(success(state.forms.currentForm));
    } catch (err) {
      dispatch(error(state.forms.currentForm, (err as any).message));
    }
  };
}
