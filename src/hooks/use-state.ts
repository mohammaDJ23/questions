import { RootState } from '../store/store';
import { useSelector } from './use-selector';

export const useState: () => RootState = () => useSelector(state => state);
