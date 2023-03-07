import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {CardType} from '../../reducers/productsSlice';
import {Button} from '../../style-components/buttons/Button';
import {Flex} from '../../style-components/flex/Flex';

type cardProductProps = {
    card: CardType
    addCardInBasket: (card: CardType)=> void
}
export const CardProduct: FC<cardProductProps> = ({card, addCardInBasket}) => {
    const navigate = useNavigate()

    const openBasket = () => {
        navigate('/basket')
    }

    return (
        <>
            <li className={'cardBox'}>
                <img width="100"
                     height= '100'
                     src={card.img}></img>
                <h3>{card.title}</h3>
                <p>{card.descriptions}</p>
                <p>{card.price} у.е.</p>
                <Flex justify={'space-between'}>
                    <Button primary onClick={()=>addCardInBasket(card)}>Add</Button>
                    <Button primary onClick={openBasket}>Buy</Button>
                </Flex>
            </li>

        </>
    );
};
