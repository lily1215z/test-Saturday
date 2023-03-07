import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                    <Global/>
                    <App/>
            </React.StrictMode>
        </Provider>
    </BrowserRouter>
);

