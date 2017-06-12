/**
 * Created by clstrfvck on 09/06/2017.
 */

export function toggleDropdown(currentlyOpen, loggedIn) {
    let payload = !currentlyOpen && loggedIn ? true : false
    return({type: "MAIN_DROPDOWN_TOGGLE", payload: payload})
}
