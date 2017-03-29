
const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";

import {LoginForm} from "./components/LoginForm"

class App extends React.Component {
    render() {
        return (
            <div className="main__wrapper">
                <div className="login__wrapper">
                    <h1 className="login__title">
                        Logi sisse
                    </h1>
                    <LoginForm>

                    </LoginForm>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));