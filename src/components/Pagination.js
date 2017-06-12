import React from "react"
const css = require("./Pagination.scss");
import {RightArrow, LeftArrow} from './Icons'

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.displayedNumbers = []
    }
    numberClicked(number) {
        `${number} clicked`;
        this.props.numberClicked(number)
    }
    arrowClicked(dir) {
        this.props.arrowClicked(this.props.currentlyActive, this.props.totalCount, dir)
    }

    componentWillMount() {
        for(let i=0; i<this.props.totalCount;i++){
            this.displayedNumbers.push(i);
        }
    }

    render() {
        return(
            <div className = "Pagination">
              <LeftArrow onClick={()=>this.arrowClicked('left')}/>
                {this.displayedNumbers.map((number, index) => {
                    return <PaginationNumber
                        key={index}
                        number={number+1}
                        activeNumber={this.props.currentlyActive}
                        clicked={()=>{this.props.numberClicked(number+1)}}
                    />
                })}
              <RightArrow onClick={()=>this.arrowClicked('right')}/>
            </div>
        )
    }
}

const PaginationNumber = ({number, activeNumber, clicked}) => {
    let classname = number == activeNumber ?
            "Pagination__number Pagination-active" :
            "Pagination__number";

    return (<span className = {classname} onClick={() => clicked(number)}>{number}</span>)
};
//this.props.totalCount
//this.props.currentlyActive
//this.props.arrowClicked(dir)
//this.props.numberClicked(number