import React, {Component} from "react"
import {Card,CardButton, CardHeader} from "../FieldCard"

const UpdatePriceList = props => (

  <Card>
    <CardHeader>
      <CardButton
        callback={()=>props.changePriceListType("northern")}
        label="Põhja-Eesti"
        active={props.activeTab === "northern"}
      />
      <CardButton
        callback={()=>props.changePriceListType("southern")}
        label="Lõuna-Eesti"
        active={props.activeTab === "southern"}
      />
    </CardHeader>
  </Card>
)

export default UpdatePriceList