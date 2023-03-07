import React, {ChangeEvent, useState} from 'react';
import {Input} from '../../style-components/input/Input';
import {Button} from '../../style-components/buttons/Button';
import {useAppSelector} from '../../hooks';
import {ProductItemType} from '../../reducers/basketSlice';

export const OrderData = () => {
    const productsBasket = useAppSelector(state => state.basket.basketItems)
    const initialValue = {
        name: '',
        surname: '',
        address: '',
        phone: '',
    }

    const [user, setUser] = useState(initialValue)
    const utilInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUser({...user, [name]: value})
    }

    const combinedData = {
        product: productsBasket,
        formData: user,
        totalPrice: productsBasket && productsBasket.reduce((acc: number, item: ProductItemType) => acc + (item.price * item.count), 0)
    }
    const saveData = async (e: any) => {
        e.preventDefault()
        const jsonString = JSON.stringify(combinedData)
        // localStorage.setItem('basketArr', JSON.stringify(productsBasket))
        console.log(jsonString)
    }

    return (
        <div>
            <form onSubmit={saveData} className={'form'}>

                <div className={'inputForm'}>
                    <Input type='text' name="name" placeholder="name" onChange={utilInputs} value={user.name} />
                </div>
                <div className={'inputForm'}>
                    <Input type='text' name="surname" placeholder="surname" onChange={utilInputs} value={user.surname} />
                </div>
                <div className={'inputForm'}>
                    <Input type='text' name="address" placeholder="address" onChange={utilInputs} value={user.address} />
                </div>
                <div className={'inputForm'}>
                    <Input type='text' name="phone" placeholder="+380969724353" onChange={utilInputs} value={user.phone} />
                </div>

                <Button color={'green'}>ORDER</Button>
            </form>
        </div>
    );
};


