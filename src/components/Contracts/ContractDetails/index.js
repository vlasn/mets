import React, { Component } from "react"
import "./ContractDetails.scss"

const fields = (
  {dates = {
    logging: "",
    timberTransport: "",
    wasteTransport: "",
  }, property, ...data}
  ) => [
  {label: "Kinnistu nimi", value: property.name},
  {label: "Dokumendi kuupäev", value: data.createdAt.split("T")[0]},
  {label: "Katastritunnused", value: property.cadastreIds.join(", ")},
  {label: "Metsateatis", value: "????", opts: "Lisa"},
  {label: "Raie teostamine", value: dates.logging.split("T")[0], opts: "Muuda"},
  {label: "Metsamaterjali väljaviimine", value: dates.timberTransport.split("T")[0], opts: "Muuda"},
  {label: "Raidmete väljaviimine", value: dates.wasteTransport.split("T")[0], opts: "Muuda"},
  {label: "Projektijuht", value: data.projectManager},
  {label: "Metsameister", value: data.foreman},
]

/*
"{
"_id": "59d9583b0e611e54c5d92762",
  "updatedAt": "2017-10-07T22:42:03.977Z",
  "createdAt": "2017-10-07T22:42:03.977Z",
  "foreman": "Ants",
  "projectManager": "Ahto",
  "property": {
  "_id": "59d9583b0e611e54c5d92761",
    "updatedAt": "2017-10-07T22:42:03.924Z",
    "createdAt": "2017-10-07T22:42:03.924Z",
    "name": "tere",
    "location": "",
    "__v": 0,
    "cadastreIds": [
    "5432542525252"
  ]
},
"__v": 0,
  "status": "pending",
  "documents": {
  "other": [],
    "contracts": [
    "Karl_1507416123908.pdf"
  ],
    "forestNotices": []
},
"representatives": [
  {
    "_id": "59d8f5c0eb79a034262f25b5",
    "updatedAt": "2017-10-07T15:41:52.121Z",
    "createdAt": "2017-10-07T15:41:52.121Z",
    "email": "564364@643643.eee",
    "personalData": {
      "name": "tere",
      "address": "Tr3222352532532",
      "idNumber": "44444444444",
      "documentNumber": "5643643643",
      "juridical": false
    }
  }
]
}" */


class ContractDetails extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    const { data } = this.props
    return (
      <div className="ContractDetails">
        { fields(data).map(field => (
          <ContractDetailsRow
            key={field.label}
            label={field.label}
            value={field.value || "Puudub"}
            opts={field.opts || ""}
          />
        )) }
      </div>
    )
  }
}

const ContractDetailsRow = ({editable, label, value, opts, ...props}) => {

  return (
    <div className="ContractDetailsRow">
      <div className="ContractDetailsRow__label">
        <span>{label}:</span>
      </div>
      <div className="ContractDetailsRow__value">
        <span contentEditable={!!editable}>{value}</span>
      </div>
      <div className="ContractDetailsRow__opts">
        <span>{opts}</span>
      </div>
    </div>
  )
}

export default ContractDetails