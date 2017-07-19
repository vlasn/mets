import React, {Component} from "react"
import "./Temp.scss"

import InputField from "../InputFields/InputField"

export default class NewClient extends Component {
    render() {
        return(
            <div className="NewClient__wrapper">
                <div className="NewClient">
                    <div className="NewClient__header">
                        <div className="NewClient__header-button">
                            tere
                        </div>
                        <div className="NewClient__header-button">
                            tere
                        </div>
                    </div>
                    <div className="NewClient__fields">
                        {
                            ["TestInput","eeeee","OKEI"]
                                .map(w => (
                                    <InputField
                                        key={w}
                                        floatingLabelText={w}
                                        change={f=>f}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}