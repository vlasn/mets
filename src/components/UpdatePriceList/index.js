import React,  { Component } from "react"
import { connect } from 'react-redux'
import _UpdatePriceList from './UpdatePriceList'
import _AddNewProduct from './AddNewProduct'
import _ChangeProductDescription from './ChangeProductDescription'

import {changePriceListType, attemptNewProductSubmit, onFieldValueChange} from "./updatePriceListActions"

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
        <h2>Uuenda hinnakirja</h2>
        <_UpdatePriceList{...this.props}/>
        <h2>Lisa uus toode</h2>
        <_AddNewProduct{...this.props}/>
        <h2>Muuda toote kirjeldust</h2>
        <_ChangeProductDescription{...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activeTab: state.updatePricelist.activeTab,
    submitted: state.updatePricelist.submitted,
    details:state.updatePricelist.details
  };
};

export default connect(
  mapStateToProps,
  {changePriceListType, attemptNewProductSubmit, onFieldValueChange}
)(UpdatePriceList);