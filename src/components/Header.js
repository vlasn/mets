/**
 * Created by henrysavi on 19/04/17.
 */
import React from "react"
import Button from "./Button"

const css = require("./Header.scss")



export default class Header extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {

    }
    displayButtons() {
        let buttons = []
        console.log(this.props.buttons)
        this.props.buttons.forEach(button=> {
            buttons.push(<Button text= {button.text} name={button.text} theme={button.theme} side={button.side}/>)
        })
        return buttons
    }

    render() {
        return(
            <div>
                <div className = "Header__wrapper">
                    <Button side = "left" name = "button" text = "Avaleht"/>
                    <h1 className="Header__title">Metsahaldur 2.O</h1>
                    {/*<Button name = "button" text = "Erko"/>
                    <Button name = "button" text = "Logout"/> */}
                    {this.displayButtons()}
                </div>
            </div>
        )
    }
}