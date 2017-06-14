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
        this.state = ({
            statusFilterOpen: false,
            personFilterOpen: false,
            statusFilterOption: '',
            personFilterOption: ''
        })
        this.personFilterOption = this.personFilterOption.bind(this)
        this.statusFilterOption = this.statusFilterOption.bind(this)
        this.onSearch = this.onSearch.bind(this)

    }

    onSearch(value) {
        this.props.updateSearchTerm(value)
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
                            open={this.props.filter.personFilterOpen}
                            label="Metsameister"
                            name="person"
                            toggle={this.props.toggleDropdown}
                            applied={this.props.filter.personFilterOption}
                        >
                            <DropdownOption
                                status="Vello"
                                activeOption={this.props.filter.personFilterOption}
                                onClick={this.personFilterOption}
                            >
                                Vello Veskimets
                            </DropdownOption>
                            <DropdownOption
                                status="Jaanus"
                                activeOption={this.props.filter.personFilterOption}
                                onClick={this.personFilterOption}
                            >
                                Jaanus Jalakas
                            </DropdownOption>
                        </Dropdown>
                    </div>
                    <div className="Filter__buttons-cell">
                        <Dropdown
                            open={this.props.filter.statusFilterOpen}
                            label="Staatus"
                            name="status"
                            toggle={this.props.toggleDropdown}
                            applied={this.props.filter.statusFilterOption}
                        >
                            <DropdownOption
                                status="active"
                                activeOption={this.props.filter.statusFilterOption}
                                onClick={this.statusFilterOption}
                            >
                                Aktiivne
                            </DropdownOption>
                            <DropdownOption
                                status="pending"
                                activeOption={this.props.filter.statusFilterOption}
                                onClick={this.statusFilterOption}
                            >
                                Ootel
                            </DropdownOption>
                            <DropdownOption
                                status="expired"
                                activeOption={this.props.filter.statusFilterOption}
                                onClick={this.statusFilterOption}
                            >
                                Aegunud
                            </DropdownOption>
                            <DropdownOption
                                status="done"
                                activeOption={this.props.filter.statusFilterOption}
                                onClick={this.statusFilterOption}
                            >
                                Tehtud
                            </DropdownOption>

                        </Dropdown>
                    </div>
                </section>
            </div>
        </MuiWrapper>

    )
    }
}