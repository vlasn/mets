/**
 * Created by clstrfvck on 14/06/2017.
 */
import React from "react"
import { connect } from 'react-redux'
import CardFilter from "./CardFilter"

class Filter extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <CardFilter {...this.props}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDropdown(label) {
            console.log('toggled '+label)
            dispatch({
                type: "TOGGLE_FILTER_DROPDOWN",
                payload: label
            })

        },
        personFilterOption(person) {
            dispatch({
                type: "PERSON_FILTER_OPTION",
                payload: person
            })
        },
        statusFilterOption(status) {
            dispatch({
                type: "STATUS_FILTER_OPTION",
                payload: status
            })
        },
        updateSearchTerm(term) {
            dispatch({
                type: "FILTER_SEARCH_TERM",
                payload: term
            })
        },
        queueSearch() {
            dispatch({
                type: "SEARCH_QUEUED"
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.clientManagement.cards.filter
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);