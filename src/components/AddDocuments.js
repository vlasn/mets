import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
const css = require("./AddDocuments.scss");
import ReactFileReader from 'react-file-reader';
import {uuid} from "../Utilities"


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
            // contract:[],
            // forestNotice:[]
        }
        // this.handleContractFiles=this.handleContractFiles.bind(this)
        // this.handleNoticeFiles=this.handleNoticeFiles.bind(this)

    }

    // //uplaodimine
    // handleContractFiles = contract => {
    //     console.log(contract)
    //     let newFiles = []
    //
    //     for(let i = 0; i<contract.length; i++) {
    //         newFiles.push(contract[i])
    //     }
    //     this.setState({
    //         ...this.state,
    //         contract:[...this.state.forestNotice, ...newFiles]
    //     })
    // }
    // handleNoticeFiles = forestNotice => {
    //     console.log(forestNotice)
    //     let newFiles = []
    //
    //     for(let i = 0; i<forestNotice.length; i++) {
    //         newFiles.push(forestNotice[i])
    //     }
    //     this.setState({
    //         ...this.state,
    //         forestNotice:[...this.state.forestNotice, ...newFiles]
    //     })
    // }


    render() {
        console.log(this.state)

        return(
                <div className="AddDocuments__wrapper">
                    <div className="AddDocuments__buttons-wrapper">
                        <div className="Heading">Lisa dokumendid</div>
                        <div className="Buttons">
                            <ReactFileReader
                                handleFiles={this.props.handleContractFiles}
                                multipleFiles={false}
                                fileTypes=".pdf"
                                name="leping"
                            >
                                <FlatButton
                                    label='Leping'
                                    backgroundColor= "#868686"
                                    hoverColor = "#00CC33"
                                    labelStyle ={labelStyles.headerButton}
                                    style={styles.regularbutton}
                                    id={uuid()}
                                    name="leping"
                                />
                            </ReactFileReader>
                            <ReactFileReader
                                handleFiles={this.props.handleNoticeFiles}
                                multipleFiles={false}
                                id={uuid()}
                                fileTypes=".pdf"
                                name="metsateatis"

                            >
                                <FlatButton
                                    label='Metsateatis'
                                    backgroundColor= "#868686"
                                    hoverColor = "#00CC33"
                                    labelStyle ={labelStyles.headerButton}
                                    style={styles.regularbutton}
                                    id={uuid()}
                                    name="metsateatis"
                                />
                            </ReactFileReader>

                        </div>
                    </div>

                </div>
        )
    }
}