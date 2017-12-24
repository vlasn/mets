import React,  { Component } from "react"
import { connect } from 'react-redux'
import _UpdatePriceList from './UpdatePriceList'
import {changePriceListType} from "./updatePriceListActions"
import "./UpdatePriceList.scss"


class UpdatePriceList extends Component {
  constructor(props){
    super(props)
  }
  componentWillReceiveProps(newProps) {
    newProps.submitted ? this.props.history.push("/") : null
  }

  render(){
    return(
      <div className="UpdatePriceList__wrapper">
        <_UpdatePriceList{...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeTab: state.creation.clientCreation.activeTab,

  };
};

export default connect(
  mapStateToProps,
  {changePriceListType}
)(UpdatePriceList);