/**
 * Created by henrysavi on 31/05/17.
 */
import React from "react"
import {Download} from "./Icons"
import { prettyPrint } from "../Utilities"
const css = require("./FileRow.scss")
import Chip from "material-ui/Chip"
import Mui from 'material-ui/styles/MuiThemeProvider';

export default class FileRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isBeingEdited: false
        }
        this.toggleBeingEdited = this.toggleBeingEdited.bind(this)
    }
    toggleBeingEdited(){
        console.log('togglin');
        console.log(this.props.editable)
        let wasBeingEdited = this.state.isBeingEdited;
        this.setState({
            ...this.state,
            isBeingEdited: !this.state.isBeingEdited
        })
        wasBeingEdited ? console.log(this.props.name+' was being edited'):null//this.props.finishedEditing(this.props.)
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
                        <div className="FileRow__filename-wrapper">
                            {this.props.fileName || prettyPrint(this.props.plainValue)}
                        </div> :
                        <div className="FileRow__editables-wrapper">
                            <EditableValue value={this.props.plainValue} editable={this.props.editable} _key={this.props.name}/>
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
const EditableValue = (p) => {
    console.log(p)
    if(p.editable){
        return(
            <Mui>
                <div>
                    {p.editable.map((row, index)=>(
                        <Chip
                            key={row.nimi||p.name+index}
                            onRequestDelete={console.log}
                            onTouchTap={console.log}
                            style={{margin: 0}}
                        >
                            {row.tunnus || row}
                        </Chip>))}
                </div>
            </Mui>
        )
    } else {
        return(
            <input type="text" className="FileRow__editable-input-field" onChange={(e)=>console.log(e.target.value)}/>
        )
    }

}