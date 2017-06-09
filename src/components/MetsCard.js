/**
 * Created by clstrfvck on 03/05/2017.
 */
import React from "react"
import DetailsWrapper from "./DetailsWrapper"
import {CaretDown, CaretUp} from "./Icons"
const css = require("./MetsCard.scss");

export default class MetsCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {open: false}
    }

    toggle() {
        this.setState({open: !this.state.open})
    }

    render() {
        let style = {
            background: this.state.open ? '#7FFFC7' : null
        };
        return(
            <div className="MetsCard__wrapper" >
                <section className="MetsCard__header"  style={style} onClick={this.toggle.bind(this) }>
                    <div className="MetsCard__header-button left">
                        {this.props.contractId}
                    </div>
                    <div className="MetsCard__header-button middle">
                        {this.props.cadastral}
                    </div>
                    <div className="MetsCard__header-button right">
                        <div className="MetsCard__header-button-flexwrap">
                            <div className="flex-button-large">
                                {this.props.propertyName}
                            </div>
                            {this.props.caret ?
                                <div className="flex-button-small">
                                    {!this.state.open ? <CaretDown/> : <CaretUp/>}
                                </div> :
                            null}
                        </div>
                    </div>
                </section>
                <section className="MetsCard__content">
                    {this.state.open ? this.props.children : null}
                </section>
            </div>
        )
    }
}