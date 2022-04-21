import { Dispatch } from 'redux';
import { RootActions } from '../root-actions';
import { ActionTypes, QuestionParams } from './types';
import { Rest } from '../../../services/rest';
import { listsApi } from '../../../apis/lists';
import { Lists } from '../../reducers/lists/types';
import { Routes } from '../../../routes/types';
import { history } from '../../..';
import { error, loading, success } from '../loading';
import { History } from '../../../utility/history';

export function updateList(listName: string, data: {}[]) {
  return {
    type: ActionTypes.UPDATE_LIST,
    payload: { data, listName },
  };
}

export function getLists(listName: string, data: {}[]) {
  return {
    type: ActionTypes.GET_LIST,
    payload: { listName, data },
  };
}

export function cleanList(listName: string) {
  return {
    type: ActionTypes.CLEAN_LIST,
    payload: { listName },
  };
}

function additionsInfo(listName: string) {
  switch (listName) {
    case Lists.COMMENTS:
      const urlInfo = History.matchPath<QuestionParams>(history.location.pathname, Routes.QUESTION);
      return { questionId: urlInfo?.params?.id };
  }
}

function listRequestProcess<T>(listName: string): Promise<T> {
  let data = additionsInfo(listName);
  return Rest.req<T>(listsApi[listName](data));
}

export function getList(listName: string) {
  return async function (dispatch: Dispatch<RootActions>) {
    try {
      dispatch(loading(listName));
      const data = await listRequestProcess<{}[]>(listName);
      dispatch(success(listName));
      dispatch(getLists(listName, data));
    } catch (err) {
      dispatch(error(listName, (err as any).message));
    }
  };
}
