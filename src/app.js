
const css = require('./app.scss');

import React from "react";
import ReactDOM from "react-dom";

import { MidaIganes } from "./components/midaIganes";
import { VeelMidagi } from "./components/veelMidagi";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi</h1>
                <MidaIganes
                	number = {66}
                />
                <VeelMidagi 
	                string = 'see on komponendi VeelMidagi Paragraph-i props.string ja kohe siin otsas on props.number: ' 
	                number = {666}
                />
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));