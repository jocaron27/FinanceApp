import {createStore, combineReducers, applyMiddleware, Store} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import {App} from '../app';

const reducer = combineReducers({user});
const loggerOptions = {collapsed: true};
const logger = createLogger(loggerOptions);
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
const store = createStore(reducer, middleware);

export default store;
export * from './user';
