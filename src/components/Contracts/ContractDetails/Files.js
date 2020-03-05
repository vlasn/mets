import React from "react"
import "./ContractDetails.scss"

const toList = docs => Object.keys(docs)
  .reduce((list, key) => [...list, ...docs[key]] , [])

export default ({documents}) => {
  return (
    <div className="ContractDetails">
      {toList(documents).map(file => (
        <div className="ContractDetailsRow" key={file.fileName}>
          <div className="ContractDetailsRow__label"><span><a href={file.filePath}>{file.fileName || file}</a></span></div>
        </div>
      ))}
    </div>
  )

}