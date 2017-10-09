/**
 * Created by clstrfvck on 03/05/2017.
 */
import React, { Component } from "react"
import DetailsWrapper from "./ContractDetails/DetailsWrapper"

import { CaretDown, CaretUp } from "../Icons"
import "./MetsCard.scss"

export default class MetsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {open: false}
    }

    toggle() {
        this.setState({open: !this.state.open})
    }

    translateStatus(status){
        switch(status) {
            case 'active':{
                return 'Aktiivne'
            }
            case 'pending':{
                return 'Ootel'
            }
            case 'expired':{
                return 'Lõppenud'
            }
            case 'done': {
                return 'Tehtud'
            }
        }
    }

    render() {
        return(
            <div className="MetsCard__wrapper" >
                <section
                    className={`MetsCard__header
                                ${this.props.status ? 'status-'+this.props.status:null}
                                ${this.state.open?'open':''}`
                    }
                    onClick={this.toggle.bind(this)}
                >
                    <div className="MetsCard__header-button left">
                        {this.props._id||'Esindaja nimi puudub!'}
                    </div>
                    <div className="MetsCard__header-button middle">
                        {
                            this.props.property && this.props.property.name ?
                                this.props.property.name :
                                "Kinnistu nimi puudub"
                        }
                    </div>
                    <div className="MetsCard__header-button right">
                        <div className="MetsCard__header-button-flexwrap">
                            <div className="flex-button-large">
                                {
                                    this.props.status ?
                                      this.translateStatus(this.props.status).toUpperCase() :
                                      "Staatus puudub"
                                }
                            </div>
                            {this.props.caret ?
                                <div className="flex-button-small">
                                    {!this.state.open ? <CaretDown/> : <CaretUp/>}
                                </div> : null
                            }
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