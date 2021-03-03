import { combineReducers } from 'redux';
import quantityReducer from './orderReducer';
import filterByCategoryReducer from './filterReducer';
import changeCategoryReducer from './changeCategoryReducer';


const reducers = combineReducers({
    quantityReducer, filterByCategoryReducer, changeCategoryReducer
});


export default reducers;