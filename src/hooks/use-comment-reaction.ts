import { useCallback } from 'react';
import { udpateItemApis } from '../apis/update-items';
import { Rest } from '../services/rest';
import { Comment, UpdateOperation } from '../store/reducers/lists/types';
import { useAction } from './use-actions';
import { useList } from './use-list';

export function useCommentReaction() {
  const { updateList, loading, success, error } = useAction();
  const { getItem, getList } = useList();

  const like = useCallback(
    async (listName: string, index: number) => {
      try {
        const item = getItem(listName, index) as Comment;
        const copyItem = { ...item };
        copyItem.likes++;

        loading(UpdateOperation.LIKE);
        await Rest.req(udpateItemApis[UpdateOperation.LIKE](copyItem));
        success(UpdateOperation.LIKE);

        const list = getList(listName);
        list[index] = copyItem;
        updateList(listName, list);
      } catch (err) {
        error(UpdateOperation.LIKE, (err as any).message);
      }
    },

    [getItem, loading, success, updateList, getList, error],
  );

  const dislike = useCallback(
    async (listName: string, index: number) => {
      try {
        const item = getItem(listName, index) as Comment;
        const copyItem = { ...item };
        copyItem.likes--;

        loading(UpdateOperation.DISLIKE);
        await Rest.req(udpateItemApis[UpdateOperation.DISLIKE](copyItem));
        success(UpdateOperation.DISLIKE);

        const list = getList(listName);
        list[index] = copyItem;
        updateList(listName, list);
      } catch (err) {
        error(UpdateOperation.DISLIKE, (err as any).message);
      }
    },

    [getItem, loading, success, updateList, getList, error],
  );

  return { like, dislike };
}
