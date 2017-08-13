/**
 * Created by clstrfvck on 08/08/2017.
 */
import React from "react"
import { Card, CardButton, CardFields, CardHeader } from "../FieldCard"
import CardWideButton from "../FieldCard/CardWideButton"
import InputFieldWithOptions from "../InputFields/InputFieldOptions"
import InputAutocompleteWrapper from "../InputFields/InputWithAutocomplete"
import InputField from "../InputFields/InputField"
import DatePicker from "../InputFields/DatePicker"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"


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
                <CardButton label="Lisa leping *" callback={f=>f}/>
                <CardButton label="Lisa metsateatis" callback={f=>f}/>
                <CardButton label="Muu" callback={f=>f}/>
            </CardHeader>
            <CardFields>
                <InputField floatingLabelText="Failirida on ka puudu" name="tere" onChange={f=>f}/>
                <InputField floatingLabelText="Mida 'muuda' nupp teeb?" name="tere" onChange={f=>f}/>

            </CardFields>
        </Card>
        <CardWideButton value="Loo leping" callback={f=>f}/>
    </div>
)



NewContract.propTypes = {

}

export default NewContract