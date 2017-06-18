/**
 * Created by clstrfvck on 18/06/2017.
 */
import React, {Component} from "react"
import { connect } from "react-redux"
import { getOptions } from "../../../actions/priceListActions"

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

    {ownKey: "Tarnekoht", dbKey: cellKeys.tarnekoht, pListKey: "Tarnekoht" },
    {ownKey: "Veoselehe nr", dbKey: cellKeys.veoseleheNr, pListKey: "???" }, //Kas seda saab üldse hinnatabelist?
    {ownKey: "Veoselehe kuupäev", dbKey: cellKeys.veoseleheKp, pListKey: "???" }, //Kas seda saab üldse hinnatabelist?
    {ownKey: "Puuliik", dbKey: cellKeys.puuliik, pListKey: "Puuliik" },
    {ownKey: "Kvaliteet", dbKey: cellKeys.kvaliteet, pListKey: "Kvaliteet" },
    {ownKey: "Hinnagrupi võti", dbKey: cellKeys.hinnagrupp, pListKey: "???" }, //Hinnatabelist puudu?
    {ownKey: "Arvestusmaht", dbKey: cellKeys.maht, pListKey: "???" }, //Hinnatabelist puudu?
    {ownKey: "Katastritunnus", dbKey: cellKeys.katastritunnus, pListKey: "???" }, //Ka hinnatabelist puudu
    {ownKey: "Sortiment", dbKey: "????", pListKey: "Sortiment" },
    {ownKey: "Pikkus min", dbKey: "????", pListKey: "Pikkus_min" },
    {ownKey: "Pikkus max", dbKey: "????", pListKey: "Pikkus_max" }

]


class PriceListForm extends Component {
    constructor(props) {
        super(props)
        //receives the whole price list row object from parent as ownProps
    }

    render(){
        console.log(this.props)
        return(
            <section>
                {FormValueMap.map(row => (
                    <Row
                        key={row.ownKey}
                        pListKey={row.pListKey}
                        ownKey={row.ownKey}
                        prevValue={this.props.mismatches[this.props.currentlyBeingEdited][row.dbKey]||'objektist puudu'}
                        getOpts={this.props.getOptions}
                        foundOpts={this.props.foundOpts.hasOwnProperty(row.pListKey) ?
                            this.props.foundOpts[row.pListKey] :
                            []
                        }
                        returnValue={console.log}
                    />
                    )
                )}
            </section>
        )
    }
}

const mapStateToProps = function(state){
    return {
        mismatches: state.priceList.mismatches,
        loading: state.priceList.loading,
        error: state.priceList.error,
        currentlyBeingEdited: state.priceList.currentlyBeingEdited,
        foundOpts: state.priceList.foundOptionsByKeys
    }
}



export default connect(mapStateToProps, {getOptions})(PriceListForm)