/**
 * Created by henrysavi on 19/04/17.
 */
import React from "react"
import Button from "./Button"

//const css = require("./FirstPassword.scss")



export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.error = null
    }
    componentWillReceiveProps() {
        console.log("component will receive props")
    }

    render() {
        return(
            <div>
                <div className = "Header">

                          <h1>
                              Metsahaldur 2.O
                          </h1>
                    <Button name = "button" text = "Logi välja"/>

                </div>
            </div>
        )
    }
}