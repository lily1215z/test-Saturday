import React, {useEffect} from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {collection, getFirestore} from 'firebase/firestore';
import {Loading} from '../Loading';
import {appFirebase} from '../../credenciales';
import {Title} from '../../style-components/title/Title';
import {Text} from '../../style-components/text/Text';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ProductItemType, setBasketItems, setCountMinus, setCountPlus} from '../../reducers/basketSlice';

const db = getFirestore(appFirebase)

export const BasketCard = () => {
    const [productsBasketFirebase, loading] = useCollectionData(collection(db, 'basket'))
    const dispatch = useAppDispatch()
    const productsBasket = useAppSelector(state => state.basket.basketItems)

    useEffect(() => {
        // @ts-ignore
        const savedBasket = JSON.parse(localStorage.getItem('basketArr')) || [];
        // @ts-ignore  //todo
        dispatch(setBasketItems(savedBasket))
    }, [productsBasketFirebase])


    if (loading) {
        return <Loading/>
    }

    function countMinusHandler(id: string) {
        dispatch(setCountMinus({id}))
        localStorage.setItem('basketArr', JSON.stringify(productsBasket))
    }

    function countPlusHandler(id: string) {
        dispatch(setCountPlus({id}))
        localStorage.setItem('basketArr', JSON.stringify(productsBasket))
    }

    return (
        <>
            {productsBasket ? productsBasket.map((list: ProductItemType) => {
                    return <div key={list.id} className={'basketCard'}>
                        <img width={100}
                             alt={''}
                             src={list.img}/>

                        <div className={'basketInfo'}>
                            <Title margin={'0 0 10px 0'} size={'20px'} color={'black'}>{list.title}</Title>
                            <Text margin={'0 0 10px 0'}>{list.descriptions}</Text>
                            <span>{list.price} y.e.</span>
                            <div>Price: {list.price * list.count}</div>
                        </div>

                        <div className={'basketCountBox'}>
                            <span onClick={() => countMinusHandler(list.id)}
                                  className={'basketCount basketCountMinus'}>-</span>
                            <span>{list.count}</span>
                            <span onClick={() => countPlusHandler(list.id)}
                                  className={'basketCount basketCountPlus'}>+</span>
                        </div>

                    </div>

                })
                : <div>Basket is empty</div>}
            <div className={'totalPrice'}>Total: {productsBasket && productsBasket.reduce((acc: number, item: ProductItemType) => acc + (item.price * item.count), 0)} y.e.</div>
        </>
    );
};
