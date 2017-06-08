import React from "react"
const css = require("./Pagination.scss");
import {RightArrow, LeftArrow} from './Icons'

export default class Pagination extends React.Component {
    render() {
        return(
            <div className = "Pagination">
              <LeftArrow/>
                <span className = "Pagination__number" >1</span> &nbsp;
                <span className = "Pagination__number" >2</span> &nbsp;
                <span className = "Pagination__number Pagination-active" >3</span>
              <RightArrow/>
            </div>
        )
    }
}
