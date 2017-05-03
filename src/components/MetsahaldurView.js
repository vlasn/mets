import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import MetsahaldurViewTable from "./MetsahaldurViewTable"
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

        <Card >
            <CardHeader
                title="Mets 1"
                //subtitle="Subtitle"
                actAsExpander={true}
                showExpandableButton={true}
                style={styles.container}
            />

            <CardText expandable={true}>
                {/*<MetsahaldurViewTable/>*/}
                <FlatButton
                    label="Leping"
                    hoverColor = "#009933"
                />
                <FlatButton
                    label="Hinnatabel"
                />
                <FlatButton
                    label="Metsateatis"
                />
                <FlatButton
                    label="Vaata koondakti"
                />

            </CardText>
        </Card>

    </MuiThemeProvider>
);

export default MetsahaldurView;