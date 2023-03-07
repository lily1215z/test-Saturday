import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    isAppInitialized: false,
    error: null as null | string,
    isLoading: false,
    isLoggedIn: false,
}


const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppInitialized: (state, action: PayloadAction<boolean>) => {
            state.isAppInitialized = action.payload
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload
        },
    },
})

export const { setAppInitialized } = appSlice.actions

export const appReducer = appSlice.reducer
