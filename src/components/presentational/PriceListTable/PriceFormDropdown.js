/**
 * Created by clstrfvck on 17/06/2017.
 */
import React, {Component} from "react"
import PropTypes from "prop-types"
const css = require("./PriceFormDropdown.scss")
import { CaretDown, CaretUp } from "../../Icons"

class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            confirmedMatch: false,
            searchTerm: ""
        }
        this.toggle = this.toggle.bind(this)
        this.updateSearchTerm = this.updateSearchTerm.bind(this)
        this.searchFilter = this.searchFilter.bind(this)
        this.confirmMatch = this.confirmMatch.bind(this)
    }
    /** PROPS */
    //this.props.prevValue - previous value
    //this.props.name
    //this.props.pListkey - from pricelist table
    //this.props.getOpts(pLkey) - function to fetch own opts by pLkey
    //this.props.options - array - own options
    //this.props.dbKey - string from response
    //this.props.enum - bool for dropdown
    //this.props.returnValue(key, value) - function to return values
    //this.props.extra={this.props.extra} priceGrpMin || priceGrpMax || false - either prevValue.split("-")[0 || 1]

    /** STATE */
    //this.state.open - bool - whether dropdown is open or not
    //this.state.confirmedMatch - false || string, confirmed prevValue against props
    //this.state.appliedFilter - string - '' || 'searchterm' to filter options by



    componentDidMount(){
        if (this.props.enum) {
            if (this.props.options.length<1) {
                this.props.getOpts(this.props.name)
            } else {
                //forcing cWRP to check matches in case opts already exist
                this.componentWillReceiveProps(this.props)
            }
        } else {
            if(this.props.prevValue.length>0) {
                this.confirmMatch(this.props.prevValue)
            }
        }
    }

    componentWillReceiveProps(newProps) {
        if (!this.state.confirmedMatch &&
           newProps.options.indexOf(this.props.prevValue)>=0
        )
        {
            this.setState({...this.state, confirmedMatch: this.props.prevValue}, () => {
                this.confirmMatch(this.props.prevValue)
            })
        }
    }

    toggle() {
        if(this.props.enum) {
            this.setState({
                ...this.state,
                open: !this.state.open
            })
        }
    }

    updateSearchTerm({key, target}) {
        if(key !== "Enter") {
            this.setState({
                ...this.state,
                searchTerm: target.value
            })
        } else if(this.props.enum===false) {
            this.confirmMatch(target.value)
        }
    }

    searchFilter(value, term) {
        if(typeof(value)!=="string") value=value.toString()
        return value.search(new RegExp(term, "i"))>=0
    }

    confirmMatch(value) {
        if(typeof(value)!=="string") value = value.toString()
        if(value=="") return
        this.setState({...this.state, confirmedMatch: value, open: false}, ()=>{
            this.FilterInput.value = value //set value of filter field
            this.FilterInput.blur()
            this.props.updateInput(value) //set value of adjacent text field
            this.props.returnValue(this.props.extra||this.props.dbKey, value) //dispatch to reducer
        })
    }

    render(){
        return(
            <div className="PriceListDropdown__wrapper">
                <div
                    className={`PriceListDropdown__clickables
                        ${this.state.open ? "open" : ""} ${this.props.enum ?"":" padding-fix"}`}
                    onClick={this.toggle}
                >
                    <input
                        className="PriceListDropdown__text"
                        placeholder={"—"}
                        ref={(input) => { {this.FilterInput = input }}}
                        onChange={this.updateSearchTerm}
                    />

                    <div className="PriceListDropdown__icon">
                        {
                            this.props.enum ?
                                this.state.open ?
                                    <CaretUp/>:<CaretDown/>
                            :null

                        }
                    </div>
                </div>
                {this.state.open ?
                    <div className="PriceListDropdown__content">
                        {
                            this.props.options.filter((v)=>this.searchFilter(v,this.state.searchTerm)).map(n =>
                                <PriceListDropdownContent value={n} key={n} click={this.confirmMatch}/>
                            )
                        }
                    </div> :
                    null}
            </div>
        )
    }
}
export const PriceListDropdownContent = props => {
    return (
        <div
            className={"PriceListDropdown__option-wrapper"}
            onClick={()=>props.click(props.value)}
        >
            {props.value}
        </div>)
}

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    prevValue: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    returnValue: PropTypes.func.isRequired,
    getOpts: PropTypes.func,
    enum: PropTypes.bool.isRequired,
    options: PropTypes.array.isRequired,
    updateInput: PropTypes.func,
    dbKey: PropTypes.oneOfType([PropTypes.string,PropTypes.bool]).isRequired,
}
PriceListDropdownContent.propTypes = {
    click: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
}

export default Dropdown

//input field == parempoolne text input.

// filtrinputi kuvatav väärtus ei tohi toorel kujul kuhugi jõuda - jõuab valiku väärtus.
// Muutmise vaates peab olema näha tabeli päis (KEY) ja rida (VALUES), mida muudetakse. Muudetav sisu kuvatakse vastava rea alla.
// filterinputti saab sisestada ainult neid väärtusi, mis on andmebaasis (hinnatabelis) olemas.
// Input field'i saab sisestada väärtusi, mis ei ole andmebaasis (hinnatabelis).

