const menuReducerDefaultState = {
    items: []
}

export default (state = menuReducerDefaultState, action) => {

    switch (action.type) {
        case 'UPDATE_ITEMS':
            console.log(action);
            return {
                ...state,
                items: action.items
            };
        default:
            return state;
    }
}