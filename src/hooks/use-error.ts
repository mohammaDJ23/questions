import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useState } from './use-state';

export function useError() {
  const { loading } = useState();

  useEffect(() => {
    for (const key in loading.errors) {
      if (loading.errors[key]) {
        toast.error(loading.errors[key], { duration: 5000 });
      }
    }
  }, [loading.errors]);

  return {};
}
