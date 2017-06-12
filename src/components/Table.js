/**
 * Created by clstrfvck on 10/06/2017.
 */
import React, { Component } from 'react'
import TableRow from './TableRow'
import Pagination from './Pagination'
const css = require("./Table.scss");

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.tableMetaData = {kogus:0,summa:0}
        this.entriesPerPage = 11;
        this.splitRows = this.splitRows.bind(this)
        this.pages = [];
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
        this.splitRows();

    }
    splitRows() {
        let pageCount = Math.ceil(this.props.tableData.length/this.entriesPerPage);
        for(let i=0;i<pageCount; i++){
            let tableLength = this.props.tableData.length;
            let perPage = tableLength<this.entriesPerPage ? tableLength : this.entriesPerPage
            let max = tableLength < (i+1)*perPage ? tableLength % (perPage*i) : perPage;
            let temp = this.props.tableData.slice(i*perPage, (i*perPage)+max);
            this.pages.push(temp)
        }
    }


    handleRowClick(id) {
        //Receives click events from table rows with an ID (currently, name of veoseleht).
        //Placeholder for Something Nice™
        console.log(`row with the ID of "${id}" was clicked.`)
    }

    render() {
        console.log(this.pages.length);
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
                            this.pages[this.props.currentPage-1].map((row, index) => {
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
                {this.pages.length>1 ?
                <Pagination
                    totalCount={this.pages.length}
                    currentlyActive={this.props.currentPage}
                    arrowClicked={this.props.arrowClicked}
                    numberClicked={this.props.numberClicked}
                /> : null}
            </div>
        )
    }
}