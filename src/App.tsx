import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components'

import {appFirebase} from './credenciales'
import {Login} from './components/auth/Login';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {Home} from './components/Home';

const auth = getAuth(appFirebase)

const AppWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`
function App() {
    const [userEnter, setUserEnter] = useState(null)

    onAuthStateChanged(auth, (userFirebase: any) => {
        if (userFirebase) {
            setUserEnter(userFirebase)
        } else {
            setUserEnter(null)
        }
    })

    return (
        <AppWrapper>
            {userEnter ? <Home/> : <Login/>}
        </AppWrapper>
    );
}

export default App;
