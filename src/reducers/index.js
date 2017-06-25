import { combineReducers } from "redux"

//App state will be generated this file - further reducers to be added with further functionality.
import user from "../components/Login/loginReducer"
import documents from "./documentsReducer"
import validation from "../components/Validate/validationReducer"
import ui from "./uiReducer"
import clientManagement from "./clientManagement"
import contractManagement from "./contractManagment"
import priceList from "./priceList"
import filter from "../components/Filter/filterReducer"

/**
 * to be combined:
 * clientManagement {
 *    filter #done, to replace "cards"
 * }
 * */
let contract = combineReducers({clientManagement, filter})

export default combineReducers({
    ui,
    user,
    documents,
    validation,
    contract,
    contractManagement,
    priceList
})