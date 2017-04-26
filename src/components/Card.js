import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Table from "./Table"
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    container: {
        textAlign:'center',
    },
    button: {
        textAlign:'left',
    }
}

const CardExampleExpandable = () => (
    <MuiThemeProvider>
        <Card style={styles.container}>
            <CardHeader
                title="Mets 1"
                //subtitle="Subtitle"
                actAsExpander={true}
                showExpandableButton={true}
            />

            <CardText expandable={true}>
                <Divider />
                    <div style={styles.button}>
                        <FlatButton label="Leping" />
                        <FlatButton label="Hinnatabel" />
                        <FlatButton label="Metsateatis" />
                        <FlatButton label="Raieluba" />
                    </div>
                <Divider/>
                <Table/>
            </CardText>
        </Card>
    </MuiThemeProvider>
);

export default CardExampleExpandable;