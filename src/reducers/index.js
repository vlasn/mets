import { combineReducers } from "redux"

//App state will be generated this file - further reducers to be added with further functionality.
import user from "./loginReducer"
import documents from "./documentsReducer"
import validation from "./validationReducer"
import ui from "./uiReducer"
import clientManagement from "./clientManagement"
import contractManagement from "./contractManagment"
import priceList from "./priceList"


export default combineReducers({
    ui,
    user,
    documents,
    validation,
    clientManagement,
    contractManagement,
    priceList
})