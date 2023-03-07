import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootStateType} from './store/store';

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector