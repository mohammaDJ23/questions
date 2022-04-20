import { useCallback } from 'react';
import { udpateItemApis } from '../apis/update-items';
import { Rest } from '../services/rest';
import { Comment, UpdateOperation } from '../store/reducers/lists/types';
import { useAction } from './use-actions';
import { useList } from './use-list';

export function useCommentReaction() {
  const { updateList, loading, success, error } = useAction();
  const { getItem, getList } = useList();

  const reaction = useCallback(
    async (listName: string, index: number, operationName: string) => {
      try {
        const item = getItem(listName, index) as Comment;
        const copyItem = { ...item };

        switch (operationName) {
          case UpdateOperation.LIKE:
            copyItem.likes++;
            break;

          case UpdateOperation.DISLIKE:
            copyItem.dislikes++;
            break;
        }

        loading(operationName);
        await Rest.req(udpateItemApis[operationName](copyItem));
        success(operationName);

        const list = getList(listName);
        list[index] = copyItem;
        updateList(listName, list);
      } catch (err) {
        error(operationName, (err as any).message);
      }
    },

    [getItem, loading, success, updateList, error, getList],
  );

  const like = useCallback(
    (listName: string, index: number) => {
      reaction(listName, index, UpdateOperation.LIKE);
    },

    [reaction],
  );

  const dislike = useCallback(
    (listName: string, index: number) => {
      reaction(listName, index, UpdateOperation.DISLIKE);
    },

    [reaction],
  );

  return { like, dislike };
}
