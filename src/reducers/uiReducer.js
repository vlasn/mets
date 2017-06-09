/**
 * Created by clstrfvck on 09/06/2017.
 */
export default function reducer( state = {
    dropdownOpen: false
}, action) {

    switch(action.type) {
        case "MAIN_DROPDOWN_TOGGLE" : {
            return {...state, dropdownOpen: action.payload}
        }
        default: {
            return {
                ...state
            }
        }
    }
}