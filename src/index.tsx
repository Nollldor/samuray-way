import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, ChangeNewPostText, StateType} from "./redux/state";

const renderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPostCallback={addPost} ChangeNewPostText={ChangeNewPostText}/>,
        document.getElementById('root')
    );
}


renderEntireTree(state)

subscribe(renderEntireTree)