/**
 * Created by henrysavi on 31/05/17.
 */
import React from "react"
import {Download} from "./Icons"
const css = require("./FileRow.scss")

export default class FileRow extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="FileRow">
                <div className="FileRow__wrapper">
                    <div className="FileRow__Icon-wrapper"><Download/></div>
                    <div className="FileRow__filename-wrapper">{this.props.fileName}</div>
                    <div className="FileRow__options-wrapper">{this.props.options}</div>
                </div>
            </div>
        )
    }
}