import React, { Component } from "react"
import "./ContractDetails.scss"
import InlineDatepicker from "../../InputFields/InlineDatepicker"

const stateToDate = dateString => {
  return !dateString ? null : new Date(dateString)
}

const dateFormatter = dateString => {
  const date = stateToDate(dateString.substring(0,10))
  console.log(date)
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

const fields = (
    {dates = {
      logging: "",
      timberTransport: "",
      wasteTransport: "",
    }, property, ...data},
    datepickerCallback
  ) => [
  {label: "Kinnistu nimi", value: property.name},
  {label: "Dokumendi kuupäev", value: dateFormatter(data.createdAt)},
  {label: "Katastritunnused", value: property.cadastreIds.join(", ")},
  {label: "Metsateatis", value: "????", opts: "Lisa"},
  {
    label: "Raie teostamine",
    value: <InlineDatepicker
      value={stateToDate(dates.logging)}
      callback={datepickerCallback}
      stateKey={"logging"}
    />,
    opts: "Muuda",
  },
  {
    label: "Metsamaterjali väljaviimine",
    value:
      <InlineDatepicker
        value={stateToDate(dates.timberTransport)}
        callback={datepickerCallback}
        stateKey={"timberTransport"}
      />,
    opts: "Muuda",
  },{
    label: "Raidmete väljaviimine",
    value:
      <InlineDatepicker
        value={stateToDate(dates.wasteTransport)}
        callback={datepickerCallback}
        stateKey={"wasteTransport"}
      />,
    opts: "Muuda",
  },
  {label: "Projektijuht", value: data.projectManager},
  {label: "Metsameister", value: data.foreman}
]

class ContractDetails extends Component {
  constructor (props) {
    super(props)
    this.datepickerCallback = this.datepickerCallback.bind(this)
  }
  datepickerCallback (key, date) {
    console.log(this.props)
    this.props.updateRow(this.props.data._id, key, new Date(date).toISOString())
  }
  render () {
    const { data } = this.props
    return (
      <div className="ContractDetails">
        {fields(data, this.datepickerCallback.bind(this)).map(field => (
          <ContractDetailsRow
            key={field.label}
            label={field.label}
            value={field.value || "Puudub"}
            opts={field.opts || ""}
          />
        ))}
      </div>
    )
  }
}

const ContractDetailsRow = ({label, value, opts, ...props}) => {

  return (
    <div className="ContractDetailsRow">
      <div className="ContractDetailsRow__label">
        <span>{label}:</span>
      </div>
      <div className="ContractDetailsRow__value">
        <span>{value}</span>
      </div>
      <div className="ContractDetailsRow__opts">
        <span>{opts}</span>
      </div>
    </div>
  )
}

export default ContractDetails