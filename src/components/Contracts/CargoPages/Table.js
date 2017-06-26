/**
 * Created by clstrfvck on 10/06/2017.
 */
import React, { Component } from 'react'
import Pagination from '../../Pagination'
const css = require("./Table.scss");

export default class Table extends Component {
    constructor(props) {
        super(props)
        this.tableMetaData = {kogus:0,summa:0}
        this.entriesPerPage = 5;
        this.state = {
            currentPage: 1,
            pages: []
        }
    }

    arrowClicked(current, total, dir) {
        console.log(current,total,dir);
        let currentPage = current
        let totalCount = total //placeholder
        let newPage = dir === 'left' ? currentPage-1 : currentPage +1;
        if(newPage >= 1 && newPage <= totalCount) {
            this.setState({currentPage: newPage})
        }
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
                    <tr className={`Table__header ${this.props.status ? this.props.status : 'default'}`}>
                        <td className="TableRow__column"> Kuupäev</td>
                        <td className="TableRow__column"/>
                        <td className="TableRow__column">calcme</td>
                        <td className="TableRow__column">calcme</td></tr>
                        {
                           this.props.pages ? this.props.pages.map(v=>JSON.stringify(v)):'puudu'
                        }
                    </tbody>
                </table>
                {this.state.pages.length>1 ?
                <Pagination
                    totalCount={this.pages.length}
                    currentlyActive={this.state.currentPage}
                    arrowClicked={this.arrowClicked.bind(this)}
                    numberClicked={this.numberClicked.bind(this)}
                /> : null}
            </div>
        )
    }
}

/**
 <TableRow
 key={index}
 kuupäev={row.date}
 veoseleht={row.name}
 kogus={row.volume}
 summa={row.price}
 handleClick={this.handleRowClick.bind(this)}
 />
 */