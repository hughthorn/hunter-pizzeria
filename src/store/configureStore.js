import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import menuReducer from '../reducers/menu';

export default () => {
    const store = createStore(
        combineReducers({
            menu: menuReducer
        }),
        applyMiddleware(
            thunkMiddleware
        )
    );
    return store;
};
