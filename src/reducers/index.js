import { combineReducers } from "redux"

//App state will be generated this file - further reducers to be added with further functionality.
import user from "./userReducer"
import documents from "./documentsReducer"

export default combineReducers({
    user,
    documents
})