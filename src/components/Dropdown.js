/**
 * Created by henrysavi on 08/06/17.
 */
/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"
import FlatButton from 'material-ui/FlatButton';
const css = require("./Dropdown.scss");

const styles = {

    button: {
        float: 'right',
        padding: '0px 10px 0px 10px',
        height: '45px',
        display:'inline-block',
        boarderRadius:'0px',
        color: 'white',
        minWidth:'120px'
    },
}

export default class Dropdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            open:!this.state.open
        });
    }

    render(){
        return(
            <div className="Dropdown__wrapper">
                <FlatButton
                    style={styles.button}
                    backgroundColor = {this.state.open ? 'black' : '#00CC33'}
                    hoverColor = "black"
                    onClick={this.handleClick}>
                    {this.state.open ? 'Erko' : 'Erko'}
                </FlatButton>
                {this.state.open ?
                    <div id="dropdown" className="Dropdown__dropdownContent">
                        {this.props.children}
                    </div>
                    : null}
            </div>
        );
    }
}