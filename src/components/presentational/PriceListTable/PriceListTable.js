/**
 * Created by clstrfvck on 18/06/2017.
 */
import React, {Component} from "react"
import { uuid } from "../../../Utilities"
import PriceListForm from "./PriceListForm"
const css = require("./PriceListTable.scss")

//For table generation automagic:
const tableHeaders = [
    "Tarnekoht",
    "Veoselehe nr",
    "Veoselehe kp",
    "Puuliik",
    "Kvaliteet",
    "Hinnagrupp",
    "Pikkus",
    "Hind",
    "Maht",
    "Katastritunnus",
]

//..Because screw using standardized key literals in the database, right...?
export const cellKeys = {
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

export const percentages = [
    13.406,
    12.747,
    12.857,
    6.703,
    8.681,
    11.868,
    6.483,
    5.604,
    5.714,
    15.82
]

class Table extends Component {
    //Need to instantiate component here to properly propagate props changes..
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <table className="PTable__wrapper" cellSpacing={0}>
                <thead>
                    <tr className="PTable__header">
                        {tableHeaders.map((header, index) =>
                            <td
                                className="PTable__header-cell"
                                style={{width: `${percentages[index]}%`, overflow: "hidden"}}
                                key={uuid()}
                            >
                                {header}
                            </td>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(this.props.items).map(key => {
                            let item = this.props.items[key];
                            if (key === this.props.currentlyBeingEdited) {
                                return (

                                    <tr key={key}>
                                        <td className="PTable__form-cell" colSpan={tableHeaders.length}>
                                            <table className="PTable__inline-table" >
                                                <tbody>
                                                    <WideRow key={key} {...item} selector={this.props.selector}/>
                                                </tbody>
                                            </table>
                                            <div className="PTable__form-wrap"><PriceListForm/></div>
                                        </td>
                                    </tr>
                                )
                            } else {
                                return (<WideRow key={key} {...item} selector={this.props.selector}/>)
                            }
                        })
                    }
                </tbody>
            </table>
        )
    }
}

//Automagic intensifies
const WideRow = (props) => (
    <tr onClick={()=>props.selector(props._id)} className="PTable__content-row">
        {Object.keys(cellKeys).map((key, index) => (
            <td
                className="PTable__content-cell"
                style={{width:`${percentages[index]}%`, overflow:"hidden"}}
                key={uuid()}
            >
                {props[cellKeys[key]]}
            </td>)
        )}
    </tr>
)

export default Table



