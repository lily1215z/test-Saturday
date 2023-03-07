import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    basketItems: [] as ProductItemType[],
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasketItems: (state, action: PayloadAction<ProductItemType[]>) => {
            state.basketItems = action.payload
        },
        setCountMinus: (state, action: PayloadAction<{id: string}>) => {
            const findItem = state.basketItems.find(i => i.id === action.payload.id)
            if(findItem) {
                findItem.count--;
            }
            if(findItem && findItem.count === 0) {
                const index = state.basketItems.findIndex(i => i.id === action.payload.id)
                if(index > -1) {
                    state.basketItems.splice(index, 1)
                }
            }
            // state.basketItems.find(i => i.id === action.payload.id ? i.count-- : i)
        },
        setCountPlus: (state, action: PayloadAction<{id: string}>) => {
            state.basketItems.filter(i => i.id === action.payload.id ? i.count += 1 : i)
        },
    },
})

export const { setBasketItems, setCountMinus, setCountPlus } = basketSlice.actions

export const basketReducer = basketSlice.reducer

export type ProductItemType = {
    title: string
    id: string
    count: number
    descriptions: string
    img: string
    price: number
}
