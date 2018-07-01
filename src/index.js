import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const commentReducer = (state = 0) => {
    console.log(state);
    console.log('hello');
    return state;
    
}

const storeInstance = createStore(
    combineReducers({
        commentReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
