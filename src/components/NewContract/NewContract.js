/**
 * Created by clstrfvck on 08/08/2017.
 */
import React from "react"
import { Card, CardButton, CardUploadButton, CardFields, CardHeader } from "../FieldCard"
import CardWideButton from "../FieldCard/CardWideButton"
import InputFieldWithOptions from "../InputFields/InputFieldOptions"
import InputAutocompleteWrapper from "../InputFields/InputWithAutocomplete"
import InputField from "../InputFields/InputField"
import DatePicker from "../InputFields/DatePicker"
import ReactFileReader from 'react-file-reader';
import NewContractRows from "../NewContract/NewContractRows"
import "./NewContract.scss"


import PropTypes from "prop-types"


const NewContract = props => {

    const files = Object.values(props.documents)
        .reduce((acc,val)=>[...acc,...val],[])

    return(
        <div className="NewContact__wrapper">
        <h2>Lisa kinnistu andmed</h2>
        <Card>
            <CardFields>
                <InputField floatingLabelText="Kinnistu nimi" name="name"
                            onChange={props.onDefaultFieldChange} required/>
                <InputField floatingLabelText="Katastritunnus" name="cadastreId"
                            onChange={props.onDefaultFieldChange} required/>
                {
                    props.representatives.map((rep,i) =>
                        <InputFieldWithOptions
                            add={props.addRepresentative}
                            remove={() => props.removeRepresentative(rep.key)}
                            key={rep.key}
                            count={props.representatives.length}
                        >
                            <InputAutocompleteWrapper
                                floatingLabelText="Kliendi esindaja"
                                name={rep.key}
                                key={rep.key}
                                onChange={props.updateRepresentative}
                                fetch={props.fetchPersonDropdownOptions}
                                options={props.searchResults}
                            />
                        </InputFieldWithOptions>
                    )
                }
                {/*<InputFieldWithOptions floatingLabelText="Kliendi esindaja" required/>*/}
                <InputField floatingLabelText="Projektijuht" name="projectManager"
                            onChange={props.onDefaultFieldChange} required/>
                <InputField floatingLabelText="Metsameister" name="foreman"
                            onChange={props.onDefaultFieldChange} required/>
            </CardFields>
        </Card>

        <h2>Lisa kuupäevad</h2>
        <Card>
            <CardFields>
                <DatePicker floatingLabelText="Raie" name="logging" onChange={props.onDefaultFieldChange} />
                <DatePicker floatingLabelText="Väljavedu" name="timberTransport" onChange={props.onDefaultFieldChange} />
                <DatePicker floatingLabelText="Raidmete väljavedu" name="wasteTransport" onChange={props.onDefaultFieldChange} />
            </CardFields>
        </Card>

        <h2>Lisa dokumendid</h2>
        <Card>
            <CardHeader>
                <CardUploadButton label="Lisa leping *" callback={props.uploadFile} type="contracts"/>
                <CardUploadButton label="Lisa metsateatis" callback={props.uploadFile} type="forestNotices"/>
                <CardUploadButton label="muu" callback={props.uploadFile} type="other"/>
            </CardHeader>
            <CardFields>
                {
                    files.length>0 ?
                    files.map(file =>
                        <NewContractRows name = {file.name} remove = {()=>props.removeFile(file.name)}/>
                    ) :
                        "Lisa vähemalt üks fail"
                }
            </CardFields>
        </Card>
        <CardWideButton value="Loo leping" callback={
          () => props.attemptNewContractSubmit(props.details,props.representatives, props.documents)
        }/>
    </div>
    )
}


NewContract.propTypes = {

}

export default NewContract