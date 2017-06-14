/**
 * Created by clstrfvck on 09/06/2017.
 */
export default function reducer( state = {
    dropdownOpen: false,
    veoselehed: {
        currentPage: 1
    }
}, action) {

    switch(action.type) {
        case "MAIN_DROPDOWN_TOGGLE" : {
            return {...state, dropdownOpen: action.payload}
        }

        case "VEOSELEHED_ACTIVE_PAGE" : {
            return {...state, veoselehed: {...state.veoselehed, currentPage: action.payload}}
        }

        default: {
            return {
                ...state
            }
        }
    }
}