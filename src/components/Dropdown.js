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
        color: '#333333',
        minWidth:'120px',
        background: '#7FFFC7'
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
                    className="FlatButton--hover"
                    style={styles.button}
                    backgroundColor = {this.state.open ? '#7FFFC7' : '#7FFFC7'}
                    hoverColor = "#7FFFC7"
                    disableTouchRipple = 'true'
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