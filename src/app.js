import "./app.scss"
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom/es"
import ProtectedRoute from "./components/ProtectedRoute"
import Login from "./components/Login"
import store from "./store"
import Validate from "./components/Validate"
import Header from "./components/Header"
import History from './components/history'
import Contracts from "./components/Contracts"
import NewClient from "./components/NewClient"
import _NewContract from "./components/NewContract"
import NewContract from "./components/NewContract/Temporary"
//import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PList from "./components/ResolveImport"
import ImportHistory from "./components/ImportHistory"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Filter from "./components/Filter"
const injectTapEventPlugin = require("react-tap-event-plugin")();

class App extends React.Component {

    render() {
        return (
            <Router history={History}>
                <MuiThemeProvider>
                    <div className="Main__wrapper">
                        <div className="Main__header">
                            <Header history={History}/>
                        </div>
                        <Navbar/>
                        <div className="Main__content">
                            <Route path="/login" component={Login}/>
                            <Route exact path="/validate/:hash" component={Validate}/>
                            <Route exact path="/imports" component={ImportHistory}/>
                            <Route exact path="/" component={Filter}/>
                            <Route exact path="/" component={Contracts}/>
                            <Route exact path="/import/:id" component={PList}/>
                            <Route exact path="/new_client" component={NewClient}/>
                            <Route exact path="/new_contract" component={NewContract}/>
                        </div>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
