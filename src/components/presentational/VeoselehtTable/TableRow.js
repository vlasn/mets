/**
 * Created by clstrfvck on 10/06/2017.
 */
import React, {Component} from 'react'

const TableRow = (props) => {
    let handleClick = ()=>{
        props.handleClick(props.veoseleht)
    }
    return(
        <tr className="TableRow" key={props.index} onClick={handleClick}>
            <td className="TableRow__column">{props.kuupäev}</td>
            <td className="TableRow__column left">{props.veoseleht}</td>
            <td className="TableRow__column">{props.kogus}</td>
            <td className="TableRow__column">{props.summa}</td>
        </tr>
    )
}

export default TableRow