import {applyMiddleware, createStore} from "redux";
import rootReducer from './reducers'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [thunk, logger];

export default  createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

