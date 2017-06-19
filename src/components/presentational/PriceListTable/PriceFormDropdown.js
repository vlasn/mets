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
            options: [],
            filter: '',
            focus: false,
        }
        this.returnSelectedValue = this.returnSelectedValue.bind(this)
        this.updateFilterTerm = this.updateFilterTerm.bind(this)
        this.toggle = this.toggle.bind(this)
        this.kPress = this.kPress.bind(this)
    }

    componentDidMount(){
        this.props.enum ?
            this.props.options.length===0 ?
                this.props.getOpts(this.props.name) :
                null
        : this.setState({...this.state, filter: this.props.prevValue})
    }

    toggle(o) {
        //pass in 'force' to force close

        let prev = this.state.open
        let opts = this.state.options
        this.props.enum ?
            this.setState({
                ...this.state,
                options: opts.length==0 ? this.props.options.map(i=>({value: i, key: uuid()})) : opts,
                open: o == 'force' ? false : !this.state.open,
            }, prev ? this.Input.blur() : null)
        :null
    }

    updateFilterTerm(event) {
        //Listen to value change and pass it to state for as a keyword to filter options by
        this.setState({
            filter: event.target.value.length>0 ? event.target.value : ''
        })
    }

    filterOption({value}, against) {
        //predicate expression to check for pre-fix match against search term
        if(against){
            if(typeof(value)!=='string') value=value.toString();
            return value.search(new RegExp(against, "i"))>=0
        } else {
            return true
        }
    }

    kPress(event) {
        if(event.key === 'Enter'){
            if (this.props.enum) {
                if(this.state.options.map(n=>n.value).indexOf(event.target.value)>=0){
                    this.returnSelectedValue(event.target.value)
                    this.Input.blur()
                }
            } else {
                this.returnSelectedValue(event.target.value)
                this.Input.blur()
            }

        }
    }

    returnSelectedValue(value) {
        this.setState({
            ...this.state,
            filter: value,
            open: false
        })
        let key = this.props.extra ? this.props.extra : this.props.dbKey
        this.props.returnValue(key, value)
    }

    render(){
        return(
            <div className="PriceListDropdown__wrapper">
                <div
                    className={`PriceListDropdown__clickables
                        ${this.state.open ? 'open' : ''} ${this.props.enum ?'':' padding-fix'}`}
                    onClick={this.toggle}
                >
                    <input
                        className="PriceListDropdown__text"
                        placeholder={this.props.prevValue || 'prevvalue?!?'}
                        onKeyPress={this.kPress}
                        onChange={this.updateFilterTerm}
                        value={this.state.filter}
                        ref={(input) => {this.Input = input}}
                    />

                    <div className='PriceListDropdown__icon'>
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
                        {this.state.options === [] ? <PriceListDropdownContent loading={true} /> : null}
                        {this.state.options.filter((v)=>this.filterOption(v, this.state.filter)).map(n =>
                            <PriceListDropdownContent value={n.value} key={n.key} click={this.returnSelectedValue}/>)}
                    </div> :
                    null}
            </div>
        )
    }
}
export const PriceListDropdownContent = props => {
    return (
        <div
            className={
                `PriceListDropdown__option-wrapper
                ${props.loading ? 'option-loading ':null}
                ${props.more ? 'option-more': null}`
            }
            onClick={()=>props.click(props.value)}>
            {props.loading ? 'Laen...' : props.more ? "Veel.." : props.value}
        </div>)
}


///to be imported from Utils module once in sync with master:
const uuid = () => {
    var i, random;
    var uuid = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }

        uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return uuid;
}
Dropdown.propTypes = {
    name: PropTypes.string,
    prevValue: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    returnValue: PropTypes.func,
    getOpts: PropTypes.func
}

export default Dropdown


