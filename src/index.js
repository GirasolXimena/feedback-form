import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const commentReducer = (state = {}, action) => {

    if (action.type === 'commentHandler') {
            return {
                ...state,
                comment: action.payload,
            }
    }
    if (action.type === 'commentButtonHandler') {
            return {
                ...state, 
                flagged: action.payload
            }
    }
    if (action.type === 'feelingHandler') {
            return {
                ...state,
                feeling: action.payload
            }
    }
    if (action.type === 'supportHandler') {
        return {
            ...state,
            understanding: action.payload
        }
    }
    if (action.type === 'understandingHandler') {
        return {
            ...state,
            support: action.payload
        }
    }
    return state;
    
}

const stepperReducer = (state = {         
    activeStep: 0,
    completed: {},
    goToNextStep: false,
    goToPrevStep: false
    }, action) => {
        let activeStep = state.activeStep
        let completed = state.completed

        if (action.type === 'handleNext') {

              return {
              ...state,
              activeStep: activeStep + 1,
              goToNextStep: true
              }
            };        
        

        if (action.type === 'handleBack') {
             return {
                ...state,
              activeStep: activeStep - 1,
              goToPrevStep: true
            };
        }
        

        if(action.type === 'handleStep'){
            return {
                ...state,
                activeStep: action.payload.step,
              };
        }
        if (action.type === 'handleComplete') {
            completed[activeStep] = true;
            return {
                ...state,
              completed,
              activeStep: activeStep +1,
            };
        }
        if (action.type === 'handleReset') {
            return {
                ...state,
                activeStep: 0,
                completed: {},
              };
        }
        if (action.type === 'resetNext') {
            return {
                ...state,
                goToNextStep: false
            }
        }


        return state;


    }


const storeInstance = createStore(
    combineReducers({
        commentReducer,
        stepperReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
