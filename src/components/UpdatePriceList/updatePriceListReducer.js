import * as actionTypes from "./updatePriceListActions"

export default function reducer( state = {
  activeTab: 'northern',
  loading: false,
  submitted: false,
  error: false,
  details: {
    priceListType: "",
    name: "",
    location: "",
    EMPK: "",
    sortiment: "",
    treeType: "",
    minD: "",
    maxD: "",
    minL: "",
    maxL: "",
    quality: "",
    price: ""
  }
}, action) {

  switch(action.type) {
    case actionTypes.CHANGE_PRICELIST_TYPE: {
      return {...state, activeTab: action.payload}
    }
    case actionTypes.NEW_PRODUCT_SUBMIT_ATTEMPT: {
      return {...state, submitted: false, loading: true}
    }
    case actionTypes.NEW_PRODUCT_SUBMIT_SUCCESS: {
      return {...state, submitted: true, loading: false}
    }
    case actionTypes.NEW_PRODUCT_SUBMIT_FAILURE: {
      return {...state, submitted: false, loading: false}
    }
    case actionTypes.NEW_PRODUCT_FIELD_CHANGE : {
      if(state.details.hasOwnProperty(action.payload.key)){
        return {...state,
          details:{
            ...state.details,
            [action.payload.key]: action.payload.value
          }
        }
      } else {
        console.log('?');
        return {...state}
      }
    }
    default: return state
  }
}
