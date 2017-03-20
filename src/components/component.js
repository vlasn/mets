/**
 * Created by clstrfvck on 20/03/2017.
 */
import React from "react"
const css = require('./component.scss');

export class Component extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="component">
                This is a component. {this.props.number}
                <p className="component__p">Paragraph.</p>
                <button className="component__btn">Button</button>
            </div>
        )
    }
}

Component.propTypes = {
    number: React.PropTypes.number //.isRequired kui prop on kohustuslik
};