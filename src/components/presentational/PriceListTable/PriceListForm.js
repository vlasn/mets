/**
 * Created by clstrfvck on 18/06/2017.
 */
import React, {Component} from "react"
import { connect } from "react-redux"
import { getOptions, addToBundle, submitBundle } from "../../../actions/priceListActions"

//import {cellKeys} from "./PriceListTable"
//Duplicate declaration because Webpack couldn't find the object from the other file. :|
const cellKeys = {
    tarnekoht: "tarnekoht",
    veoseleheNr: "Elvise VL nr",
    veoseleheKp: "veoselehe kuupäev",
    puuliik: "puuliik",
    kvaliteet: "kvaliteet",
    hinnagrupp: "hinna gr  \"võti\"",
    pikkus: "L         arvestus pikkus (dm)", //arvestus||tegelik??
    hind: "Hind",
    maht: "arvestus maht", //arvestus || tegelik??
    katastritunnus: "Katastritunnus",
}

import Row from "./PriceFormRow"

const FormValueMap = [
    //_key: the key displayed in the table. dbKey: key in object received from DB. pListKey: key in pricelist model.

    //A few issues here, highlighted by the ???-s. Some values missing from the mismatch object, half values missing
    //from the price list -> impossible to use provided endpoint to populate dropdown values...

    {ownKey: "Tarnekoht", dbKey: cellKeys.tarnekoht, pListKey: "Sihtkoht", enum: true },
    {ownKey: "Veoselehe nr", dbKey: cellKeys.veoseleheNr, pListKey: "Veoselehe Nr", enum: false },
    {ownKey: "Veoselehe kp", dbKey: cellKeys.veoseleheKp, pListKey: "Veoselehe kuupäev", enum: false }, /*TODO - type date*/
    {ownKey: "Puuliik", dbKey: cellKeys.puuliik, pListKey: "Puuliik", enum: true },
    {ownKey: "Kvaliteet", dbKey: cellKeys.kvaliteet, pListKey: "Kvaliteet", enum: true },
    {ownKey: "Hinnagrupp (min)", dbKey: cellKeys.hinnagrupp, pListKey: "Diameeter_min", enum: true, extra:"priceGrpMin"  },
    {ownKey: "Hinnagrupi (max)", dbKey: cellKeys.hinnagrupp, pListKey: "Diameeter_max", enum: true,  extra:"priceGrpMax"},
    {ownKey: "Arvestusmaht", dbKey: cellKeys.maht, pListKey: "Arvestusmaht", enum: false },
    {ownKey: "Katastritunnus", dbKey: cellKeys.katastritunnus, pListKey: "Katastritunnus", enum: false },
    {ownKey: "Sortiment", dbKey: false, pListKey: "Sortiment", enum: true },
    {ownKey: "Pikkus min", dbKey: false, pListKey: "Pikkus_min", enum: true },
    {ownKey: "Pikkus max", dbKey: false, pListKey: "Pikkus_max", enum: true }

]


class PriceListForm extends Component {
    constructor(props) {
        super(props)
        //receives the whole price list row object from parent as ownProps
        this.bundle = this.bundle.bind(this)
        this.submitBundle = this.submitBundle.bind(this)
    }
    bundle(key, value){
        this.props.addToBundle(this.props.currentlyBeingEdited,key,value)
    }
    submitBundle() {
        this.props.submitBundle(
            this.props.mismatches[this.props.currentlyBeingEdited],
            this.props.currentlyEditedOpts
        )
    }

    render(){
        return(
            <section>
                {FormValueMap.map(row => (
                    <Row
                        key={row.ownKey}
                        pListKey={row.pListKey}
                        ownKey={row.ownKey}
                        prevValue={this.props.mismatches[this.props.currentlyBeingEdited][row.dbKey] || "-"}
                        getOpts={this.props.getOptions}
                        dbKey={row.dbKey}
                        foundOpts={
                            this.props.foundOpts.hasOwnProperty(row.pListKey) ?
                                this.props.foundOpts[row.pListKey] :
                                []
                        }
                        enum={row.enum}
                        extra={row.extra || false}
                        returnValue={this.bundle}
                    />
                    )
                )}
                <div className="PriceForm__buttons-wrapper">
                    <PFormButton
                        click={this.submitBundle}
                    >
                        Muuda mõõteraporti rida
                    </PFormButton>
                    <PFormButton disabled >Lisa hinnatabelisse uus toode</PFormButton>
                </div>
            </section>
        )
    }
}
const PFormButton = (props) => {
    return (
        <div className="PFormButton__wrapper">
            <button className={`PFormButton ${props.disabled ? 'disabled' : ''}`} onClick={props.click}>{props.children}</button>
        </div>
    )
}

const mapStateToProps = function(state){
    return {
        mismatches: state.priceList.mismatches,
        loading: state.priceList.loading,
        error: state.priceList.error,
        currentlyBeingEdited: state.priceList.currentlyBeingEdited,
        foundOpts: state.priceList.foundOptionsByKeys,
        currentlyEditedOpts: state.priceList.currentlyEditedOpts
    }
}



export default connect(mapStateToProps, {getOptions, addToBundle, submitBundle})(PriceListForm)