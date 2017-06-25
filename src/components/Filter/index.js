/**
 * Created by clstrfvck on 14/06/2017.
 */
import React from "react"
import { connect } from 'react-redux'
import CardFilter from "./CardFilter"

import { toggleDropdown, personFilterOption, statusFilterOption, updateSearchTerm, queueSearch } from "./filterActions"

class Filter extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log("filter:", this.props)
        return(
            <CardFilter {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.contract.filter
    }
}

export default connect(
    mapStateToProps,
    {
        queueSearch, toggleDropdown, personFilterOption, statusFilterOption, updateSearchTerm
    }
)(Filter);