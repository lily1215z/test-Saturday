import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {AppDispatch, RootStateType} from '../store/store';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import {appFirebase} from '../credenciales';
import {ProductItemType} from './basketSlice';

const db = getFirestore(appFirebase)

const initialState = {
    productsItems: []as ProductItemType[],
}

export const setItemInBasketTC = (card: CardType) => async (dispatch: AppDispatch, getState: RootStateType) => {
    // const [products, loading] = useCollectionData(collection(db, 'basket'))
    // const products = getState.products.productsItems
    // const basket = getState.basket.basketItems

    try {
        // for(let i=0; i <products.length; i++ ) {
        //     for(let k=0; k<basket.length; k++) {
        //         if(products[i] === basket[k]) {
        //             return
                // } else {
                    await addDoc(collection(db, 'basket'), {
                        ...card
                    })
                    // dispatch(setProductsItems(card))
                // }
        //     }
        // }


        // if(products?.find(i => i.id === card.id)) {
        //      return deleteDoc(doc(db, 'basket', card.id))
        // } else {
        //     await addDoc(collection(db, 'basket'), {
        //         ...card
        //     })
        // }

    } catch (e) {
        console.log(e)
    }
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProductsItems: (state, action: PayloadAction<ProductItemType[]>) => {
            state.productsItems = action.payload
        },
    },
})

export const {setProductsItems} = productsSlice.actions

export const productsReducer = productsSlice.reducer

export type CardType = {
    title: string
    descriptions: string
    price: string
    img: string
    id: string
    count: number

}
