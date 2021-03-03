import * as action from './actionTypes';


export default function filterByCategory(category) {
    return {
        type: action.FILTER_BY_CATEGORY,
        payload: category
    }
}