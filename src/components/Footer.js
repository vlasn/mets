import React from "react"
const css = require("./Footer.scss");

export default class Footer extends React.Component {
    render() {
        return(
            <div className = "Footer">
              <div className="Footer__element left-align" ><p>Meie reklaam</p></div>
              <div className="Footer__element"><p>Teeme metsa ära | 2017</p></div>
              <div className="Footer__element right-align"><p>Metsahaldur OÜ</p></div>
            </div>
        )
    }
}
