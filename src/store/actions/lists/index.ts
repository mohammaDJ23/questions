import { Dispatch } from 'redux';
import { RootActions } from '../root-actions';
import { ActionTypes } from './types';
import { loading, error, success } from '../loading';
import { Rest } from '../../../services/rest';
import { listsApi } from '../../../apis/lists';

export function getLists(listType: string, data: {}[]) {
  return {
    type: ActionTypes.GET_LIST,
    payload: { listType, data },
  };
}

function requestProcess(listType: string): Promise<{}[]> {
  return Rest.req<{}[]>(listsApi[listType]());
}

export function getList(listType: string) {
  return async function (dispatch: Dispatch<RootActions>) {
    try {
      dispatch(loading(listType));
      const data = await requestProcess(listType);
      dispatch(success(listType));
      dispatch(getLists(listType, data));
    } catch (err) {
      dispatch(error(listType, (err as any).message));
    }
  };
}
