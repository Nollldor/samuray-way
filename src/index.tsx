import React from 'react';
import './index.css';
import {StateType, store} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';

const renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPostCallback={store.addPost.bind(store)} ChangeNewPostText={store.ChangeNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}


renderEntireTree(store.getState())

store.subscribe(renderEntireTree)