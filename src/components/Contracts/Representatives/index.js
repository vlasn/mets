import React from "react"
import "./Representatives.scss"

export default ({reps}) => {
  return(
    <div className="Representatives">
      <div className="Representatives__row grey-bg">
        <div><span>Esindaja nimi</span></div>
        <div><span>Esindaja e-post</span></div>
        <div><span>Esindaja telefon</span></div>
      </div>
      {reps.map(rep => (
        <div key={rep._id} className="Representatives__row">
          <div><span>{rep.personalData.name}</span></div>
          <div><span>{rep.email || "-"}</span></div>
          <div><span>{rep.personalData.phone || "-"}</span></div>
        </div>
      ))}
    </div>
  )
}