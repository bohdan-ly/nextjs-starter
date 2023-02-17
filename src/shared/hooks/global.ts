import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line import/no-internal-modules
import { AppDispatch, RootState } from 'shared/types';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
