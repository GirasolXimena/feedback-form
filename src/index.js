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

const stepperReducer = (state = {         
    activeStep: 0,
    completed: {},
    goToNextStep: false,
    }, action) => {
        let activeStep = state.activeStep
        let completed = state.completed
        let goToNextStep = state.goToNextStep
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
