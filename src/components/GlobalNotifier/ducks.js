import { uuid } from "../../utils/Utilities"

export const GLOBAL_SUCCESS = "GLOBAL_SUCCESS"
export const GLOBAL_ERROR = "GLOBAL_ERROR"
export const HIDE_GLOBAL = "HIDE_GLOBAL"

const defaultState = {
  notifiers: []
}
const newNotifier = (text, id, error) => ({
  type: error ? "error" : "success",
  text: text,
  id: id
})

export const hideNotifier = id => ({type: HIDE_GLOBAL, id})

export default function reducer(state = defaultState, action) {
  switch(action.type) {
    case GLOBAL_SUCCESS: {
      return {
        ...state,
        notifiers: [...state.notifiers, newNotifier(action.text, uuid(), false)]
      }
    }
    case GLOBAL_ERROR: {
      return {
        ...state,
        notifiers: [...state.notifiers, newNotifier(action.text, uuid(), true)]
      }
    }
    case HIDE_GLOBAL: {
      return {
        ...state,
        notifiers: state.notifiers.filter(n => n.id !== action.id)
      }
    }
    default: {
      return state
    }
  }
}