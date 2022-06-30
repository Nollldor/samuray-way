import React from 'react';
import './index.css';
import {store, StoreType} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';

const renderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}


renderEntireTree(store)

store.subscribe(renderEntireTree)