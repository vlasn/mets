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
import imports from "../components/ImportHistory/importReducer"
import cargoPage from "../components/Contracts/CargoPages/cargoPageReducer"
import clientCreation from "../components/NewClient/clientCreationReducer"

let contract = combineReducers({clientManagement, filter, cargoPage})
let creation = combineReducers({clientCreation})
export default combineReducers({
    ui,
    user,
    documents,
    validation,
    imports,
    contract,
    creation,
    contractManagement,
    priceList
})