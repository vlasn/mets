import * as actionTypes from "./updatePriceListActions"

export default function reducer( state = {
  activeTab: 'northern',
  loading: false,
  submitted: false,
  error: false,
  details: {
  }
}, action) {

  switch(action.type) {
    case actionTypes.CHANGE_PRICELIST_TYPE: {
      return {...state, activeTab: action.payload}
    }
    default: return state
  }
}