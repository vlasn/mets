/**
 * Created by henrysavi on 21/04/17.
 */
import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Tab A" value="a">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab A</h2>
                        <p>
                            1
                        </p>
                    </div>
                </Tab>
                <Tab label="Tab B" value="b">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab B</h2>
                        <p>
                            2
                        </p>
                    </div>
                </Tab>
                <Tab label="Tab D" value="c">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab C</h2>
                        <p>
                            3
                        </p>
                    </div>
                </Tab>
                <Tab label="Tab D" value="d">
                    <div>
                        <h2 style={styles.headline}>Controllable Tab D</h2>
                        <p>
                            4
                        </p>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}