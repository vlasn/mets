
const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux"

import Login from "./components/Login"
import store from "./store"

class App extends React.Component {
    render() {
        return (
            <div className="main__wrapper">
                <div className="login__wrapper">
                    <Login>
                    </Login>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));