const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route } from "react-router-dom/es"
import Login from "./components/Login"
import store from "./store"
import Validate from "./components/Validate"
import HeaderWrapper from "./components/HeaderWrapper"
import History from './components/history'
import Contracts from "./components/containers/Contracts"
import AddClient from "./components/containers/NewClient"
import Footer from "./components/Footer"

import Filter from "./components/containers/Filter"


class App extends React.Component {

    render() {
        return (
            <Router history={History}>
                <div className="main__wrapper">
                    <HeaderWrapper/>
                    <Filter/>
                    <Route exact={true} path="/login" component={Login}/>
                    <Route exact path="/validate/:hash" component={Validate}/>
                    <Route path="/"
                        exact={true}
                        render={()=>(
                           <Contracts/>
                        )
                        }
                    />
                    <Route exact path="/new_client" component={AddClient}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
