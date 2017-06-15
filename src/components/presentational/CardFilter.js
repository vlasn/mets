/**
 * Created by clstrfvck on 14/06/2017.
 */

import React, {Component} from "react"
import MuiWrapper from "material-ui/styles/MuiThemeProvider"
import SearchBar from "./SearchBar"
import {Dropdown, DropdownOption} from "./FilterDropdown"

const css = require('./CardFilter.scss')

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.personFilterOption = this.personFilterOption.bind(this)
        this.statusFilterOption = this.statusFilterOption.bind(this)
        this.onSearch = this.onSearch.bind(this)
        this.statusOptions = [
            {status: 'active', label:'Aktiivne'},
            {status: 'pending', label:'Ootel'},
            {status: 'expired', label: 'Aegunud'},
            {status: 'done', label:'Tehtud'},
        ]
        this.personOptions = [
            {status: 'Jaagup', label:'Jaagup Jaloviin'},
            {status: 'Väino', label:'Väino Viigipuu'},
        ]

    }

    onSearch(value) {
        this.props.updateSearchTerm(value, this.props.filter)
    }
    toggleDropdown(label) {
        this.props.toggleDropdown(label);
        // console.log('toggled '+label)
        // let prevState = this.state;
        // this.setState({
        //     ...this.state,
        //     [label+'FilterOpen']: !prevState[label+'FilterOpen']
        // })
    }
    statusFilterOption(status){
        this.props.statusFilterOption(status)
        this.props.toggleDropdown('status')
    }
    personFilterOption(person) {
        this.props.personFilterOption(person)
        this.props.toggleDropdown('person')
    }

    render() {
        return(
        <MuiWrapper>
            <div className="Filter__wrapper">
                <section className="Filter__searchbar-wrapper">
                    <SearchBar
                        onChange={this.onSearch}
                    />
                </section>
                <section className="Filter__buttons">
                    <div className="Filter__buttons-cell">
                        <Dropdown
                            open={this.props.filter.statusFilterOpen}
                            label="Staatus"
                            name="status"
                            toggle={this.props.toggleDropdown}
                            applied={this.props.filter.statusFilterOption}
                        >
                            {this.statusOptions.map((row, index)=>{
                                return (
                                    <DropdownOption
                                        key={index}
                                        status={row.status}
                                        activeOption={this.props.filter.statusFilterOption}
                                        onClick={this.statusFilterOption}>
                                        {row.label}
                                    </DropdownOption>
                                )
                            })}

                        </Dropdown>
                    </div>
                    <div className="Filter__buttons-cell">
                        <Dropdown
                            open={this.props.filter.personFilterOpen}
                            label="Vali metsameister"
                            name="person"
                            toggle={this.props.toggleDropdown}
                            applied={this.props.filter.personFilterOption}
                        >
                            {this.personOptions.map((row, index)=>{
                                return (
                                    <DropdownOption
                                        key={index}
                                        status={row.status}
                                        activeOption={this.props.filter.personFilterOption}
                                        onClick={this.personFilterOption}>
                                        {row.label}
                                    </DropdownOption>
                                )
                            })}
                        </Dropdown>
                    </div>
                </section>
            </div>
        </MuiWrapper>

    )
    }
}