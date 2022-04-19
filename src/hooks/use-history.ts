import { useHistory as uHistory } from 'react-router-dom';

export function useHistory() {
  const history = uHistory();

  const push = (path: string) => {
    if (path === history.location.pathname) {
      return;
    }

    history.push(path);
  };

  return { push };
}
