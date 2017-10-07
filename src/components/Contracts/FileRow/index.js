/**
 * Created by henrysavi on 31/05/17.
 */
import React from "react"
import {Download} from "../../Icons"
import { prettyPrint } from "../../../utils/Utilities"
import EditableValue from "./EditableValue"
const css = require("./FileRow.scss")

export default class FileRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBeingEdited: false,
            newValue: ''
        }
        this.toggleBeingEdited = this.toggleBeingEdited.bind(this)
        this.wasUpdated = this.wasUpdated.bind(this)
    }
    toggleBeingEdited(newValue=false){
        let wasBeingEdited = this.state.isBeingEdited;
        this.setState({
            ...this.state,
            isBeingEdited: !this.state.isBeingEdited
        })
        wasBeingEdited && newValue ? this.wasUpdated(newValue):null//this.props.finishedEditing(this.props.)
    }
    wasUpdated(v) {
        console.log('going to submit: ',this.props.name,v)
        this.props.change(this.props.name, v);
    }

    render() {
        return(
            <div className="FileRow">
                <div className="FileRow__wrapper">
                    {!this.props.plainText ?
                        <div className="FileRow__Icon-wrapper"><Download/></div> :
                        <div className="FileRow__Key-wrapper">{this.props.plainKey}</div>
                    }
                    {!this.state.isBeingEdited ?
                        <div className="FileRow__filename-wrapper" onDoubleClick={this.toggleBeingEdited}>
                            {this.props.fileName || prettyPrint(this.props.plainValue)}
                        </div> :
                        <div className="FileRow__editables-wrapper">
                            <EditableValue
                                editables={this.props.editable||false}
                                returnValues={this.wasUpdated}
                                stop={this.toggleBeingEdited}
                            />
                        </div>
                    }
                    <div className="FileRow__options-wrapper">
                        <Options click={this.toggleBeingEdited} isBeingEdited={this.state.isBeingEdited}/>
                    </div>
                </div>
            </div>
        )
    }
}

const Options = (props) =>(
    <span className="FileRow__options" onClick={()=>props.click()}>{props.isBeingEdited ? 'Salvesta' : 'Muuda'}</span>
)
