
const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Login from "./components/Login"
import store from "./store"
import Validate from "./components/Validate"
import Landing from "./components/Landing"


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="main__wrapper">
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/newuser'}>Kasutaja valideerimine</Link>
                    <Link to={'/landing'}>Landing page</Link>

                    <Route path="/login" component={Login}/>
                    <Route path="/newuser" component={Validate}/>
                    <Route path="/landing" component={Landing}/>
                    <Route path="/" exact={true} render={()=>(<p>Lingid kiireks vaadete vahetamiseks on praegu siin kohal.</p>)}/>
                    <Landing/>

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