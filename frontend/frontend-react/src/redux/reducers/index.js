import { combineReducers } from 'redux';
import quantityReducer from './orderReducer';
import filterReducer from './filterReducer';


const reducers = combineReducers({
    quantityReducer, filterReducer
});


export default reducers;