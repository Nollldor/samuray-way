import React from 'react';
import './index.css';
import {store, StoreType, StateType} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';


const renderEntireTree = (store: StoreType) => {

    ReactDOM.render(
        <App state={store.getState() as StateType} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}


renderEntireTree(store)

store.subscribe(() => {
    renderEntireTree(store)
})