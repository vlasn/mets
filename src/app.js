const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom/es"
import Login from "./components/Login/Login"
import store from "./store"
import Validate from "./components/Validate/Validate"
import HeaderWrapper from "./components/Header/HeaderWrapper"
import History from './components/history'
import Contracts from "./components/Contracts"
import NewClient from "./components/NewClient"
import NewContract from "./components/NewContract"
//import Footer from "./components/Footer"
import PList from "./components/ResolveImport"
import ImportHistory from "./components/ImportHistory"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Filter from "./components/Filter"

class App extends React.Component {

    render() {
        return (
            <Router history={History}>
                <MuiThemeProvider>
                    <div className="main__wrapper">
                        <HeaderWrapper/>
                        <Route exact={true} path="/login" component={Login}/>
                        <Route exact path="/validate/:hash" component={Validate}/>
                        <Route exact path="/" component={ImportHistory}/>
                        <Route path="/" exact component={Filter}/>
                        <Route path="/" exact component={Contracts}/>
                        <Route exact path="/import/:id" component={PList}/>
                        <Route exact path="/new_client" component={NewClient}/>
                        <Route exact path="/add_contract" component={NewContract}/>

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
