export const loadMenu = () => {
    return (dispatch) => {
        return fetch('api/menu')
            .then(results => results.json())
            .then(response => {
                dispatch({
                    type: 'UPDATE_ITEMS',
                    ...response
                });
            });
    }
};