/**
 * Created by clstrfvck on 25/06/2017.
 */

import * as actionTypes from "./importActions"


export default function reducer( state = {
    loading: false,
    uploading: false,
    refetching: false,
    imports: [],
    fetchError: "",
    uploadError: ""

}, action) {
    switch (action.type) {

        case actionTypes.IMPORT_HISTORY_LOADING : {
            return {
                ...state,
                loading: true,
                fetchError: false,
            }
        }

        case actionTypes.IMPORT_HISTORY_FETCH : {
            return{
                ...state,
                imports: action.payload,
                loading: false
            }
        }

        case actionTypes.IMPORT_HISTORY_ERROR : {
            return {
                ...state,
                imports: [],
                loading: false,
                fetchError: "Midagi läks valesti: "+action.payload
            }
        }

        case actionTypes.XLSX_UPLOAD_ATTEMPT : {
            return {
                ...state,
                uploading: true,
                error: ""
            }
        }

        case actionTypes.XLSX_UPLOAD_SUCCESSFUL : {
            return {
                ...state,
                uploading: false
                //should trigger a refetch
            }
        }
        case actionTypes.XLSX_UPLOAD_REJECTED : {
            return {
                ...state,
                uploading: false,
                uploadError: "Midagi läks valesti: "+action.payload
            }
        }

        default : {
            return {
                ...state
            }
        }
    }
}