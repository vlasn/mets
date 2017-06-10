/**
 * Created by clstrfvck on 10/06/2017.
 */
import React, { Component } from 'react'
import TableRow from './TableRow'
const css = require("./Table.scss");

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.tableMetaData = {kogus:0,summa:0}
    }

    componentWillMount() {
        //Dynamically calculates the total sums of amounts + values in provided array
        this.tableMetaData = this.props.tableData.reduce(
            ({kogus, summa}, row)=>{
                return {
                    kogus: parseInt(kogus) + parseInt(row.kogus),
                    summa: parseInt(summa) + parseInt(row.summa)
                }
            }, {kogus:0, summa:0});
    }

    handleRowClick(id) {
        //Receives click events from table rows with an ID (currently, name of veoseleht).
        //Placeholder for Something Nice™
        console.log(`row with the ID of "${id}" was clicked.`)
    }

    render() {
        return(
            <div className="Table__wrapper">
                <table className="Table" cellSpacing={0}>
                    <thead>
                        <tr><th className="Table__column"/>
                            <th className="Table__column wide"/>
                            <th className="Table__column narrow" >kogus/tm</th>
                            <th className="Table__column narrow">summa/€</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="Table__header">
                        <td className="TableRow__column"> Kuupäev</td>
                        <td className="TableRow__column"/>
                        <td className="TableRow__column">{this.tableMetaData.kogus}</td>
                        <td className="TableRow__column">{this.tableMetaData.summa}</td></tr>
                        {
                            this.props.tableData.map((row, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    kuupäev={row.kuupäev}
                                    veoseleht={row.veoseleht}
                                    kogus={row.kogus}
                                    summa={row.summa}
                                    handleClick={this.handleRowClick}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}