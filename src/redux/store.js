// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import settings from './reducer';
import logger from 'redux-logger';

const middleware = [thunk]
middleware.push(logger)

const rootReducer = combineReducers({
    settings
})

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
