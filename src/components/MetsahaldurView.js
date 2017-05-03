import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import MetsahaldurViewTable from "./MetsahaldurViewTable"
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DetailsWrapper from "./DetailsWrapper"
const css = require("./MetsahaldurView.scss")

const styles = {
    card: {
        boxShadow:'1px',
        border:'1px solid black',
        borderRadius:'0px',
        padding:'10px',
        textTransform: 'uppercase',

},
    cardHeader: {
        display:'inline',
    },
    cardHeaderLeft: {
        display:'inline',
        padding:'0',
        float:'left',
    },
    cardHeaderRight: {
        display:'inline',
        padding:'0',
        float:'right',
    },
};


const MetsahaldurView = () => (
    <div className = "MetsahaldurView__wrapper">
        <MuiThemeProvider>
            <Card style={styles.card}>

                <CardHeader
                    title="Leping"
                    style={styles.cardHeaderLeft}
                    actAsExpander={true}
                />
                <CardHeader
                    title="Kinnistu nimi"
                    style={styles.cardHeader}
                    actAsExpander={true}
                />
                <CardHeader
                    title="Ootel"
                    style={styles.cardHeaderRight}
                    actAsExpander={true}
                    showExpandableButton={true}

                />

                <CardText expandable={true}>
                    <DetailsWrapper/>
                </CardText>
            </Card>
        </MuiThemeProvider>
    </div>
);

export default MetsahaldurView;