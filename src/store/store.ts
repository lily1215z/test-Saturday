import {configureStore} from '@reduxjs/toolkit';
import {productsReducer} from '../reducers/productsSlice';
import {appReducer} from '../reducers/appSlice';
import thunk from 'redux-thunk';
import {basketReducer} from '../reducers/basketSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        app: appReducer,
        basket: basketReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch