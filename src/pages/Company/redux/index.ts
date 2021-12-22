import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const composeFunc: any = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnch = composeFunc(applyMiddleware(thunk))
const initState = {};

export const store = createStore(rootReducer(), composeEnch)