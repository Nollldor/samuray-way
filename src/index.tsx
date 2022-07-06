import React from 'react';
import './index.css';
import {store, StoreType} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';


const renderEntireTree = (store: StoreType) => {

    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}


renderEntireTree(store)

store.subscribe(() => {
    renderEntireTree(store)
})