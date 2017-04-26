/**
 * Created by henrysavi on 21/04/17.
 */
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MetahaldurViewTable from "./MetahaldurViewTable"

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default class MetsahaldurViewTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <MuiThemeProvider>

                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    inkBarStyle={this.inkBarStyle}
                >
                    <Tab label="Mets 1" value="a">
                        <div>
                            <h2 style={styles.headline}>Mets 1</h2>
                            <Table/>

                        </div>
                    </Tab>
                    <Tab label="Mets 2" value="b">
                        <div>
                            <h2 style={styles.headline}>Mets 2</h2>
                            <MetahaldurViewTable/>

                        </div>
                    </Tab>
                </Tabs>
            </MuiThemeProvider>


                );
    }
}