import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    // All reducer will be here in the section
});

const intialState = {};

const middleware = [thunk];

const store = createStore
    (
        reducer,
        intialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );

export default store;