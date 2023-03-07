import React from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {Basket} from './basket/Basket';
import {PageProducts} from './products/pageProducts';
import {Header} from './Header';
import {appFirebase} from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
import {Button} from '../style-components/buttons/Button';
const auth = getAuth(appFirebase)

export const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header/>

            <Button onClick={()=> navigate(-1)}>Back</Button>
            <Button color={'#131c14'} onClick={() => signOut(auth)}>Exit</Button>

            <Routes>
                <Route path={'/basket'} element={<Basket/>}/>
                <Route path={'/'} element={<PageProducts/>}/>

                <Route path={'/404'} element={<div>Error 404</div>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </>
    );
};
