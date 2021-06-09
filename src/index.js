import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom'

import { createStore } from "redux"
import { Provider } from 'react-redux'

let initialStateWineReducer = {
  wines: []
}

//Return value becomes global state
let wineReducer = (state = initialStateWineReducer, action) => {
  switch(action.type){
    default: 
    return state
  }
}

let storeObj = createStore(wineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(storeObj.getState())

ReactDOM.render(
  <BrowserRouter>
  <Provider store={storeObj}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

