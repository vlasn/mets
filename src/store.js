/**
 * Created by clstrfvck on 12/04/2017.
 */
//App state will be built in this file.

import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducers"


let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

let store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store