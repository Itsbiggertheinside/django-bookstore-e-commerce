const filterByCategoryReducer = (state = [], action) => {
    switch(action.type){
        case 'FILTER_BY_CATEGORY':
            return action.payload;
        default:
            return state
    }
}

export default filterByCategoryReducer;