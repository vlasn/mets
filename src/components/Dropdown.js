/**
 * Created by henrysavi on 08/06/17.
 */
/**
 * Created by clstrfvck on 29/03/2017.
 */
import React from "react"
import FlatButton from 'material-ui/FlatButton';
const css = require("./Dropdown.scss");
import { Link } from 'react-router-dom'




export default class Dropdown extends React.Component{
    constructor(props) {
        super(props);
        this.state = {open: false};
        console.log(props);
        this.handleClick = this.handleClick.bind(this)
    }

    styles = {
        headerButton: {
            float: 'left',
            padding: '0px 10px 0px 10px',
            height: '45px',
            display:'inline-block',
            boarderRadius:'0px',
        },
        dropdownButton: {
            display:'block',
            color:'white'
        },
    };

    handleClick() {
       this.props.clicked()
        console.log(1)
    }

    render(){
        return(
            <div className="Dropdown__wrapper">
                {this.props.display}
                {this.props.open ? <div className="Dropdown__dropdownContent"> {this.props.children} </div> : null}
            </div>
        );
    }
}

/*
    @@loggedIn, ? label : login
    @@children
    dropdown {
        display {
            //loggedIn picks whats get sent in as displayable, logic in parent
        }
        children {
            //What will be displayed if open
        }
        openCondition {
            //if not blank, checks additional bool before opening
        }
    }
 */
/*
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
 };
 ---
<FlatButton
    style={styles.button}
    backgroundColor = {this.state.open ? 'black' : '#00CC33'}
    hoverColor = "black"
    onClick={this.handleClick}>
    {this.state.open ? 'Erko' : 'Erko'}
</FlatButton>
 */