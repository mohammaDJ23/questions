import { matchPath } from 'react-router-dom';

export class History {
  static matchPath<T>(currentPathname: string, actualPathname: string) {
    return matchPath<T>(currentPathname, { path: actualPathname });
  }
}
