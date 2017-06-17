import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
const css = require("./AddDocuments.scss");
import ReactFileReader from 'react-file-reader';

const labelStyles = {
    headerButton: {
        color: 'white'
    }
}

const styles = {
    regularbutton: {
        float: 'left',
        width: "161px",
        display:'inline-block',
        boarderRadius:'0px',
        margin: "10px",
    },
    longbutton: {
        float: 'left',
        padding: '0px 50px 0px 50px',
        display:'inline-block',
        boarderRadius:'0px',
        width: "400px",
    },
};

export default class AddDocuments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            files:[]
        }
        this.handleFiles=this.handleFiles.bind(this)
    }

    //uplaodimine
    handleFiles = files => {
        console.log(files)
        let newFiles = []

        for(let i = 0; i<files.length; i++) {
            newFiles.push(files[i])
        }

        this.setState({
            ...this.state,
            files:[...this.state.files, ...newFiles]
        })
    }


    render() {
        return(
                <div className="AddDocuments__wrapper">
                    <div className="AddDocuments__buttons-wrapper">
                        <div className="Heading">Lisa dokumendid</div>
                        <div className="Buttons">
                            <ReactFileReader handleFiles={this.handleFiles}>
                                <FlatButton
                                    label='Leping'
                                    backgroundColor= "#868686"
                                    hoverColor = "#00CC33"
                                    labelStyle ={labelStyles.headerButton}
                                    style={styles.regularbutton}
                                />
                            </ReactFileReader>
                            <ReactFileReader handleFiles={this.handleFiles}>
                                <FlatButton
                                    label='Metsateatis'
                                    backgroundColor= "#868686"
                                    hoverColor = "#00CC33"
                                    labelStyle ={labelStyles.headerButton}
                                    style={styles.regularbutton}
                                />
                            </ReactFileReader>
                            <ReactFileReader handleFiles={this.handleFiles}>
                                <FlatButton
                                    label='Muu'
                                    backgroundColor= "#868686"
                                    hoverColor = "#00CC33"
                                    labelStyle ={labelStyles.headerButton}
                                    style={styles.regularbutton}
                                />
                            </ReactFileReader>
                        </div>
                    </div>
                    <div className="Uploads__wrapper">
                    {this.state.files.map((row)=><span className="Uploads">{row.name}</span>)}
                    </div>
                </div>
        )
    }
}