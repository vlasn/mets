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

import PropTypes from "prop-types"


const NewContract = props => (
    <div>
        <h1>Lisa kinnistu andmed</h1>
        <Card>
            <CardFields>
                <InputField floatingLabelText="Kinnistu nimi" name="kinnistu_nimi"
                            onChange={props.onDefaultFieldChange} required/>
                <InputField floatingLabelText="Katastritunnus" name="katastritunnus"
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
                <InputField floatingLabelText="Projektijuht" name="projektijuht"
                            onChange={props.onDefaultFieldChange} required/>
                <InputField floatingLabelText="Metsameister" name="metsameister"
                            onChange={props.onDefaultFieldChange} required/>
            </CardFields>
        </Card>

        <h1>Lisa kuupäevad</h1>
        <Card>
            <CardFields>
                <DatePicker floatingLabelText="Raie" name="raie_teostamine" onChange={props.onDefaultFieldChange} />
                <DatePicker floatingLabelText="Väljavedu" name="materjali_viimine" onChange={props.onDefaultFieldChange} />
                <DatePicker floatingLabelText="Raidmete väljavedu" name="raidmete_viimine" onChange={props.onDefaultFieldChange} />
            </CardFields>
        </Card>

        <h1>Lisa dokumendid</h1>
        <Card>
            <CardHeader>
                <CardUploadButton label="Lisa leping *" callback={props.uploadFile} type="contract"/>
                <CardUploadButton label="Lisa metsateatis" callback={props.uploadFile} type="forestNotice"/>
                <CardUploadButton label="muu" callback={props.uploadFile} type="other"/>
            </CardHeader>
            <CardFields>
                {Object.values(props.documents)
                    .reduce((acc,val)=>[...acc,...val],[])
                    .map(file =>
                        //FIXME - this needs an actual component that takes file and removal function as props...
                        //...instead of the div and span visible here
                        <div>{file.name} <span onClick={()=>props.removeFile(file.name)}>Eemalda</span></div>
                    )
                }
                <InputField floatingLabelText="Failirida on ka puudu" name="tere" onChange={f=>f}/>
                <InputField floatingLabelText="Mida 'muuda' nupp teeb?" name="tere" onChange={f=>f}/>

            </CardFields>
        </Card>
        <CardWideButton value="Loo leping" callback={
          () => props.attemptNewContractSubmit(props.details,props.representatives, props.documents)
        }/>
    </div>
)



NewContract.propTypes = {

}

export default NewContract