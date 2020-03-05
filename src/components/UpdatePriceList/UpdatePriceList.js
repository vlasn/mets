import React, {Component} from "react"
import {Card,CardButton, CardHeader} from "../FieldCard"

//TODO fix regexes
export const fields = [
  {label: "Saeveski nimi", key: "name", required: true, regex: /^[A-Za-zöäõü ]{3,20}$/},
  {label: "Asukoht", key: "location", required: true, regex: /^[0-9]{11,11}$/},
  {label: "EMPK", key: "empk", required: true, regex:/^[A-Za-zöäõü ]{3,50}$/},
  {label: "Sortiment", key:"sortiment", required: true, regex: /^(?![0-9])(.*?).*[A-Za-z0-9\/\- ]{3,50}$/},
  {label: "Puuliik", key: "treeType", required: true, regex: /^[0-9]{8,8}$/},
  {label: "Min d", key: "minD", required: true, regex: /\S+@\S+\.\S+/},
  {label: "Max d", key: "maxD", required: true, regex: /^[0-9]{5,20}$/},
  {label: "Min L", key: "minL", required: true, regex: /^[A-Za-z ]{3,20}$/},
  {label: "Max L", key: "maxL", required: true, regex: /^[0-9]{14,14}$/},
  {label: "Kvaliteet", key: "quality", required: true, regex: /^[A-Za-z ]{3,20}$/},
  {label: "Hind", key: "price", required: true, regex: /^[0-9]{14,14}$/}
]

const UpdatePriceList = props => (
  <Card>
    {console.log(props)}
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