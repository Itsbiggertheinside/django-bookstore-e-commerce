import { combineReducers } from 'redux';
import quantityReducer from './orderReducer';
import filterByCategoryReducer from './filterReducer';


const reducers = combineReducers({
    quantityReducer, filterByCategoryReducer
});


export default reducers;