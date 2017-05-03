/**
 * Created by clstrfvck on 03/05/2017.
 */
import React from "react"
import DetailsWrapper from "./DetailsWrapper"
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
        return(
            <div className="MetsCard__wrapper" >
                <section className="MetsCard__header" onClick={this.toggle.bind(this)}>
                    <div className="MetsCard__header-button left">
                        Üks
                    </div>
                    <div className="MetsCard__header-button middle">
                        Kaks
                    </div>
                    <div className="MetsCard__header-button right">
                        Kolm
                    </div>
                </section>
                <section className="MetsCard__content">
                    {this.state.open ? this.props.children : null}
                </section>
            </div>
        )
    }
}