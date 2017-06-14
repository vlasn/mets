import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from './presentational/ClientCreationInput';

const css = require("./CreateClient.scss");

const labelStyles = {
    headerButton: {
        color: 'white'
    }
};

const styles = {
    regularbutton: {
        //float: 'left',
        width: "160px",
        display:'inline-block',
        boarderRadius:'0px',
        margin: "10px",
    },
    widebutton: {
        width: "390px",
        
    },
    underlineStyle: {
        borderColor: '#00CC33',
    },
    floatingLabelFocusStyle:{
        color: 'black',
    },
};

const SwitchPersonType = (props) => {
    let onSwitch = (type)=>{
        if(props.activeTab !== type){
            props.switchType(type)
        }
    };
    return(
        <div style={{display: 'block', width: '100%'}}>
        <div className="Small__button">
            <FlatButton
                label='Juriidiline isik'
                backgroundColor={props.activeTab=='juridicalPerson'?"#00CC33":"#868686"}
                hoverColor="#00CC33"
                labelStyle={labelStyles.headerButton}
                style={styles.regularbutton}
                onTouchTap={()=>onSwitch('juridicalPerson')}
            />
            <FlatButton
                label='Eraisik'
                backgroundColor={props.activeTab=='privatePerson'?"#00CC33":"#868686"}
                hoverColor="#00CC33"
                labelStyle={labelStyles.headerButton}
                style={styles.regularbutton}
                onTouchTap={()=>onSwitch('privatePerson')}
            />
            </div>
        </div>
    )
};

export default class NewClient extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <div className="Heading"><h1>Loo klient</h1></div>
                    {/* Switch */}
                    <SwitchPersonType switchType={this.props.changePersonType} activeTab={this.props.activeTab}/>
                    {/*View logic:*/}
                    <form onSubmit={()=>this.handleSubmit('tere')}>
                    {this.props.activeTab=='privatePerson' ? (
                            <div className="Textfield">
                                <TextField
                                    label="Nimi"
                                    name="name"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="Isikukood"
                                    name="personalId"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="Dokumendi number"
                                    name="documentId"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="E-posti aadress"
                                    name="email"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="Kontakt"
                                    name="contact"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="Aadress"
                                    name="address"
                                    onChange={this.props.onFieldValueChange}
                                />
                            </div>
                        ) : (
                            <div className="Textfield">
                                <TextField
                                    label="Nimi"
                                    name="name"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="Reg nr"
                                    name="companyRegistration"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="E-posti aadress"
                                    name="email"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="KMKNR"
                                    name="vatDutyNumber"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="Kontakt"
                                    name="contact"
                                    onChange={this.props.onFieldValueChange}
                                />
                                <TextField
                                    label="Aadress"
                                    name="address"
                                    onChange={this.props.onFieldValueChange}
                                />
                            </div>
                        )}
                    <div className="Big__button">
                        <FlatButton
                            label='Loo klient'
                            backgroundColor="#00CC33"
                            hoverColor="#00CC33"
                            labelStyle={labelStyles.headerButton}
                            style={styles.widebutton}
                            onTouchTap={()=>this.props.onSubmit({...this.props.details, type: this.props.activeTab})}
                        />
                    </div>
                    </form>
                </div>
            </MuiThemeProvider>
        );
    }

}
