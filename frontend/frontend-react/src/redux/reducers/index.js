import { combineReducers, CombineReducers } from 'redux';
import quantityReducer from './orderReducer';


const reducers = combineReducers({
    quantityReducer
});


export default reducers;