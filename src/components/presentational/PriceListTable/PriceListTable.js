/**
 * Created by clstrfvck on 18/06/2017.
 */
import React, {Component} from "react"
import EditableRow from "./PriceFormRow"
import PriceListForm from "./PriceListForm"

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

class Table extends Component {
    //Need to instantiate component here to properly propagate props changes..
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <table style={{width: "100%"}}>
                <thead>
                <tr>
                    {tableHeaders.map(header => <td key={uuid()}>{header}</td>)}
                </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(this.props.items).map(key => {
                            let item = this.props.items[key];
                            if (key === this.props.currentlyBeingEdited) {
                                return (
                                    <tr key={key}>
                                        <td colSpan={tableHeaders.length}>
                                            <PriceListForm/>
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
    <tr onClick={()=>props.selector(props._id)}>
        {Object.keys(cellKeys).map(key => <td key={uuid()}>{props[cellKeys[key]]}</td>)}
    </tr>
)

export default Table




// TODO - export from Utils.js after merge with master
const uuid = () => {
    let i, random;
    let uuid = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }

        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return uuid;
}