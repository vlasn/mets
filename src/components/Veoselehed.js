/**
 * Created by clstrfvck on 12/04/2017.
 */

import React from "react"
import { connect } from 'react-redux'
import { fetchCargoPages } from "../actions/uiActions"
import Table from './Table'
import TableRow from './TableRow'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Veoselehed extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            pages: [],
            activePage: 1,
            totalPrice: 0,
            totalVolume: 0
        })
        this.entriesPerPage = 5
        this.makePages = this.makePages.bind(this)
    }

    componentWillMount() {
        if(!this.props.sheets) {
            this.props.fetchCargoPages(this.props.cadastral, this.props.contractId)
        } else {
        }
    }
    componentWillReceiveProps(props) {
        if(props.sheets) {
            this.makePages(props.sheets)
        }
    }

    makePages(sheets) {
        console.log(sheets);

        this.setState({
            ...this.state,
            totalPrice: calc(sheets,'price'),
            totalVolume: calc(sheets,'volume')
        })
    }

    render() {
        console.log(this.state)
        return (
            <MuiThemeProvider>
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
                            <td className="TableRow__column">{this.props.sheets ? calc(this.props.sheets,'volume'): 0}</td>
                            <td className="TableRow__column">{this.props.sheets ? calc(this.props.sheets,'price'): 0}</td></tr>
                        {
                            this.props.sheets && this.props.sheets.length>0 ?
                                this.props.sheets.map((row, index) => {
                                    return(
                                        <TableRow
                                            key={index}
                                            kuupäev={row.date}
                                            veoseleht={row.name}
                                            kogus={row.volume}
                                            summa={row.price}
                                        />
                                    )
                                }) : <td colSpan="4">Veoselehed puuduvad</td>
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
            </MuiThemeProvider>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        numberClicked(number) {
            dispatch({type: "VEOSELEHED_ACTIVE_PAGE", payload: number})
        },
        arrowClicked(current, total, dir) {
            console.log(current,total,dir);
            let currentPage = current
            let totalCount = total //placeholder
            let newPage = dir === 'left' ? currentPage-1 : currentPage +1;
            if(newPage >= 1 && newPage <= totalCount) {
                dispatch({type: "VEOSELEHED_ACTIVE_PAGE", payload: newPage});
            }
        },

    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        loading: state.user.loading,
        currentPage: state.ui.veoselehed.currentPage,
        sheets: state.clientManagement.contracts.filter(v=>v._id===ownProps.contractId)[0].cargoSheets
    };
};

export default connect(
    mapStateToProps,
    {...mapDispatchToProps, fetchCargoPages}
)(Veoselehed);

let calc = (from, key) => from.reduce((acc, val) => acc+val[key],0);