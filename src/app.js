
const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";

import { Component } from "./components/component";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <Component number = {5}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));