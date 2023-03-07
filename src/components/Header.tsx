import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useAppSelector} from '../hooks';
import {ProductItemType} from '../reducers/basketSlice';
import {useNavigate} from 'react-router-dom';

export const Header = () => {
    const basketItemsFromState = useAppSelector(state => state.basket.basketItems)
    const navigate = useNavigate()

    const openBasket = () => {
        navigate('/basket')
    }

    return (
        <div className={'header'}>
            <div className={'headerBasket'}>
                <ShoppingBasketIcon className={'basketIcon'} onClick={openBasket} fontSize="large"/>
                <div>total: <span className={'headerPrice'}>
                    {basketItemsFromState && basketItemsFromState.reduce((acc: number, item: ProductItemType) => acc + (item.price * item.count), 0)}
                </span>y.e.
                </div>
            </div>
        </div>
    );
};
