import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from "./Dialog"
const styles = {
    header: {
        backgroundColor: '#00CC33',
        color:'white',
    },
    table:{
        tableLayout: 'auto',
        whiteSpace: 'nowrap'
    },
    tableColumnWidth:{
        width:'100px',
        minWidth:'100px'
    }
};

const tableData = [
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33882',
        kogus: '30',
        summa: '111',
    },

    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33882',
        kogus: '30',
        summa: '111',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33882',
        kogus: '30',
        summa: '111',
    },
    {
        kuupäev: '11.03.2016',
        veoseleht: 'Veoseleht 33882',
        kogus: '30',
        summa: '111',
    },
];

export default class MetsahaldurViewTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: false,
            fixedFooter: false,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: '300px',
        };
    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({height: event.target.value});
    };

    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.container}>
                    <Dialog/>
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        fixedFooter={this.state.fixedFooter}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                        //TODO
                        style={styles.table}
                        onCellClick={(row, col, event) => console.log(row, col)}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                        >
                            <TableRow
                            >
                                <TableRowColumn></TableRowColumn>
                                <TableRowColumn></TableRowColumn>
                                <TableRowColumn>kogus/tm</TableRowColumn>
                                <TableRowColumn>summa/€</TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={styles.header}
                            >
                                <TableRowColumn>Kuupäev</TableRowColumn>
                                <TableRowColumn></TableRowColumn>
                                <TableRowColumn>333</TableRowColumn>
                                <TableRowColumn>1000€</TableRowColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}
                        >
                            {tableData.map( (row) => (
                                    <TableRow >
                                        <TableRowColumn style={styles.tableColumnWidth}>{row.kuupäev}</TableRowColumn>
                                        <Dialog>
                                            <TableRowColumn>{row.veoseleht}</TableRowColumn>
                                        </Dialog>
                                        <TableRowColumn style={styles.tableColumnWidth}>{row.kogus}</TableRowColumn>
                                        <TableRowColumn style={styles.tableColumnWidth}>{row.summa}</TableRowColumn>
                                    </TableRow>

                            ))}
                        </TableBody>
                        <TableFooter
                            adjustForCheckbox={this.state.showCheckboxes}
                        >
                        </TableFooter>
                    </Table>
            </div>
            </MuiThemeProvider>
        );
    }
}
