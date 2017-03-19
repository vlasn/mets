
const css = require('./app.scss');

import React from "react"
import ReactDOM from "react-dom"

class Komponent extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
          <h1>Hellooo</h1>
        );
    }
}

ReactDOM.render(<Komponent/>,document.getElementById('root'));