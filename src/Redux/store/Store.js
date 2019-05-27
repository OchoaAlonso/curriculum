import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMilddleware from 'redux-promise-middleware';
import {GET_DATA_REDUCER} from '../reducers/NoteReducer';

const CATALOGO =combineReducers({
      stateDatos: GET_DATA_REDUCER
});

const Store = createStore(CATALOGO, applyMiddleware(promiseMilddleware));

export default Store;