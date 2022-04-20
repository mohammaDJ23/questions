import { useCallback } from 'react';
import { useState } from './use-state';

export function useList() {
  const { lists } = useState();

  const getListInfo = useCallback(
    (listName: string) => {
      return lists.lists[listName];
    },
    [lists],
  );

  const getList = useCallback(
    (listName: string) => {
      return getListInfo(listName).list;
    },
    [getListInfo],
  );

  const getItem = useCallback(
    (listName: string, index: number) => {
      return getListInfo(listName).list[index];
    },
    [getListInfo],
  );

  const getListCount = useCallback(
    (listName: string) => {
      return getListInfo(listName).count;
    },
    [getListInfo],
  );

  return { getListInfo, getList, getItem, getListCount };
}
