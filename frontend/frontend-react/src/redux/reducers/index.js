import { combineReducers } from 'redux';
import filterByCategoryReducer from './filter';
import getBookDetailReducer from './detail';


const rootReducer = combineReducers({
    filterByCategoryReducer, getBookDetailReducer
})


export default rootReducer;