import React from 'react';
import './index.css';
import {store, StoreType} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "./StoreContext";


const renderEntireTree = (store: StoreType) => {

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}


renderEntireTree(store)

store.subscribe(() => {
    renderEntireTree(store)
})