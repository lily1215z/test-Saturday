import React from 'react';
import {BasketCard} from './BasketCard';
import {OrderData} from './OrderData';
import {Title} from '../../style-components/title/Title';
import {Flex} from '../../style-components/flex/Flex';

export const Basket = () => {

    return (
        <>
            <Flex justify={'center'}>
                <Title color={'#092a98'}>Basket</Title>
            </Flex>

            <div className={'basket'}>

                <div className={'basketCardBox'}>
                    <BasketCard/>
                </div>

                <div className={'basketOrderBox'}>
                    <OrderData/>
                </div>
            </div>
        </>

    );
};
