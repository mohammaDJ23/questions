import { FC } from 'react';

interface Path {
  path: string;
  component: FC<{}>;
}

export type Paths = Path[];
