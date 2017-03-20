/**
 * Created by clstrfck, edited by thetloffline on 20/03/2017.
 */
import React from "react"
const css = require('./midaiganes.scss');

export class MidaIganes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="midaIganes">
                See on Div. Ja see on MidaIganes objekti külge lisatan props.number: {this.props.number}
                <p className="midaIganes__p">Ja see on Paragraph, millel on CSS hover: yellow.</p>
                <button className="midaIganes__btn">Button</button>
            </div>
        )
    }
}

MidaIganes.propTypes = {
    number: React.PropTypes.number //.isRequired kui prop on kohustuslik
};