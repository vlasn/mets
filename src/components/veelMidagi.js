/**
 * Created by clstrfck, edited by thetloffline on 20/03/2017.
 */
import React from "react"
const css = require('./veelMidagi.scss');

export class VeelMidagi extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className = "veelMidagi">
				<div>Mingi Div, mis on VeelMidagi klassi objektil sama</div>
				<p className ="veelMidagi__p">
				{this.props.string}
				{this.props.number}
				</p>
			</div>
		)
	}
}

VeelMidagi.propTypes = {
	string: React.PropTypes.string 
}