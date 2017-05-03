import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MetsahaldurViewTable from "./MetsahaldurViewTable"
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import MetsahaldurViewTab from "./MetsahaldurViewTab"

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    container: {
        textAlign:'center',
    },

}


const MetsahaldurView = () => (
    <MuiThemeProvider>

        <Card style={styles.container}>
            <CardHeader
                title="Mets 1"
                //subtitle="Subtitle"
                actAsExpander={true}
                showExpandableButton={true}
            />

            <CardText expandable={true}>
                {/*<MetsahaldurViewTable/>*/}
            </CardText>
        </Card>

    </MuiThemeProvider>
);

export default MetsahaldurView;