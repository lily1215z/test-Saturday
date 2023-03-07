import React, {FC, useEffect} from 'react';
import {appFirebase} from '../../credenciales'
import {getFirestore, collection, addDoc, getDoc, doc, deleteDoc, getDocs, setDoc} from 'firebase/firestore'
import {CardProduct} from './cardProduct';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {Loading} from '../Loading';
import {Title} from '../../style-components/title/Title';
import {Flex} from '../../style-components/flex/Flex';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {CardType, setItemInBasketTC, setProductsItems} from '../../reducers/productsSlice';

const db = getFirestore(appFirebase)

interface Props {
    maxWidth?: string;
    width?: string;
    backgroundColor?: string;
    color?: string;
    border?: string;
}

export const PageProducts: FC<Props> = () => {
    const [products, loading] = useCollectionData(collection(db, 'products'))
    const dispatch = useAppDispatch()
    const productItems = useAppSelector(state => state.products.productsItems)

    useEffect( () => {
        // @ts-ignore  //todo
        dispatch(setProductsItems(products))
    }, [products])


    const basket = useAppSelector(state => state.basket.basketItems)

    const addCardInBasket = (card: CardType) => {
        // for(let i=0; i <productItems.length; i++ ) {
        //     for(let k=0; k<basket.length; k++) {
        //         if(productItems[i] === basket[k]) {
        //             return
        //         } else {
                    // @ts-ignore
                    dispatch(setItemInBasketTC(card))
        //         }
        //     }
        // }

    }

    if(loading) {
        return <Loading/>
    }

    return (
        <>
            <Flex justify={'center'}>
                <Title color={'red'}>List all products</Title>
            </Flex>


            <ul className={'cardInner'}>
                {productItems && productItems.map((list: any) => {
                    return <CardProduct key={list.id} card={list} addCardInBasket={addCardInBasket}/>
                })}
            </ul>
        </>
    );
};
