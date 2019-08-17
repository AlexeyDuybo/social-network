import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";


import authReducer from "./auth/reducer";
import menuReducer from "./menu/reducer";
import friendsReducer from "./friendsList/reducer";

const rootReducer = combineReducers(
    {
        auth: authReducer,
        menu: menuReducer,
        friendsList: friendsReducer
    }
)

export default createStore(rootReducer, applyMiddleware(thunkMiddleWare));