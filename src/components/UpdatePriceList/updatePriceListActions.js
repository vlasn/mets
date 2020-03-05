import Api from "../../utils/Api"

export const CHANGE_PRICELIST_TYPE = "CHANGE_PRICELIST_TYPE"
export const NEW_PRODUCT_VALIDATION_FAILURE = "NEW_PRODUCT_VALIDATION_FAILURE"
export const NEW_PRODUCT_SUBMIT_ATTEMPT = "NEW_PRODUCT_SUBMIT_ATTEMPT"
export const NEW_PRODUCT_SUBMIT_SUCCESS = "NEW_PRODUCT_SUBMIT_SUCCESS"
export const NEW_PRODUCT_SUBMIT_FAILURE = "NEW_PRODUCT_SUBMIT_FAILURE"
export const NEW_PRODUCT_FIELD_CHANGE = "NEW_PRODUCT_FIELD_CHANGE"

export const changePriceListType = priceListType => ({type: 'CHANGE_PRICELIST_TYPE', payload: priceListType})

const validateContractSubmission = (details) => {
  let errors = []
  const validateOne = (value, regex) => regex.test(value)
    if(!validateOne(details['name'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('name')
    if(!validateOne(details['location'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('location')
    if(!validateOne(details['EMPK'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('EMPK')
    if(!validateOne(details['sortiment'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('sortiment')
    if(!validateOne(details['treeType'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('treeType')
    if(!validateOne(details['minD'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('minD')
    if(!validateOne(details['maxD'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('maxD')
    if(!validateOne(details['minL'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('minL')
    if(!validateOne(details['maxL'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('maxL')
    if(!validateOne(details['quality'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('quality')
    if(!validateOne(details['price'], /^[A-Za-zöäõü ]{3,20}$/)) errors.push('price')

  return errors
}

export const attemptNewProductSubmit = (details, activeTab) => {
  const errors = validateContractSubmission(details)
  console.log(errors)
  if (errors.length < 1) {
    return dispatch => {
      dispatch({type: NEW_PRODUCT_SUBMIT_ATTEMPT})
      console.log("submit", activeTab)
      Api('POST', '/newProduct', { //TODO needs real endpoint
        priceListType: activeTab,
        name: details.name,
        location: details.location,
        EMPK: details.EMPK,
        sortiment: details.sortiment,
        treeType: details.treeType,
        minD: details.minD,
        maxD: details.maxD,
        minL: details.minL,
        maxL: details.maxL,
        quality: details.quality,
        price: details.price
      })
        .then(data => {
          dispatch({type: NEW_PRODUCT_SUBMIT_SUCCESS})
          dispatch({
            type: "GLOBAL_SUCCESS",
            payload: "new product added"
          })
        })
        .catch(error => {
          console.log(error);
          dispatch({type: 'NEW_PRODUCT_SUBMIT_FAILURE', payload: error})
        })
    }
  } else {
    return dispatch => {
      dispatch(
        {
          type: NEW_PRODUCT_VALIDATION_FAILURE,
          payload: "vigased väljad"
        }
      )
    }
  }
}

export const onFieldValueChange = (source, value) =>
  ({type: NEW_PRODUCT_FIELD_CHANGE, payload:{key: source, value: value}})
