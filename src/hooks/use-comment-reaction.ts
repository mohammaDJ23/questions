import { useCallback } from 'react';
import { udpateItemApis } from '../apis/update-items';
import { Rest } from '../services/rest';
import { Comment, UpdateOperation } from '../store/reducers/lists/types';
import { useAction } from './use-actions';
import { useList } from './use-list';

export function useCommentReaction() {
  const { updateList, loading, success, error } = useAction();
  const { getItem, getList } = useList();

  const updateProcess = useCallback(
    async (listName: string, index: number, data: Comment) => {
      try {
        loading(UpdateOperation.COMMENT);
        await Rest.req(udpateItemApis[UpdateOperation.COMMENT](data));
        success(UpdateOperation.COMMENT);

        const list = getList(listName);
        list[index] = data;
        updateList(listName, list);
      } catch (err) {
        error(UpdateOperation.COMMENT, (err as any).message);
      }
    },

    [loading, success, updateList, getList, error],
  );

  const like = useCallback(
    (listName: string, index: number) => {
      const item = getItem(listName, index) as Comment;
      const copyItem = { ...item };
      copyItem.likes++;
      copyItem.updatedAt = new Date().toISOString();
      updateProcess(listName, index, copyItem);
    },

    [updateProcess, getItem],
  );

  const dislike = useCallback(
    (listName: string, index: number) => {
      const item = getItem(listName, index) as Comment;
      const copyItem = { ...item };
      copyItem.dislikes++;
      copyItem.updatedAt = new Date().toISOString();
      updateProcess(listName, index, copyItem);
    },

    [updateProcess, getItem],
  );

  return { like, dislike };
}
