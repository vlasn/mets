/**
 * Created by clstrfvck on 08/08/2017.
 */
import React from "react"
import { Card, CardButton, CardFields, CardHeader } from "../FieldCard"
import CardWideButton from "../FieldCard/CardWideButton"
import InputFieldWithOptions from "../InputFields/InputFieldOptions"
import InputAutocompleteWrapper from "../InputFields/InputAutocompleteWrapper"
import InputField from "../InputFields/InputField"
import PropTypes from "prop-types"


const NewContract = (f) => (
    <div>
        <h1>Lisa kinnistu andmed</h1>
        <Card>
            <CardFields>
                <InputField floatingLabelText="Tere" name="propertyName" onChange={f=>f} required/>
                <InputAutocompleteWrapper floatingLabelText="Testiväli (hiljem katastritunnus)" name="cadastral" onChange={f=>f} required/>
                <InputFieldWithOptions floatingLabelText="Kliendi esindaja" required/>
                <InputField floatingLabelText="Projektijuht" name="projectManager" onChange={f=>f} required/>
                <InputField floatingLabelText="Metsameister" name="???" onChange={f=>f} required/>
            </CardFields>
        </Card>

        <h1>Lisa kuupäevad</h1>
        <Card>
            <CardFields>
                <InputField floatingLabelText="Vajab Kuupäevasisendeid" name="tere" onChange={f=>f}/>
                <InputField floatingLabelText="Vajab Kuupäevasisendeid" name="tere" onChange={f=>f}/>
                <InputField floatingLabelText="Vajab Kuupäevasisendeid" name="tere" onChange={f=>f}/>
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