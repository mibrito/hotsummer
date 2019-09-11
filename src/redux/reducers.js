import { combineReducers } from 'redux'
import { CLICK_UPDATE_VALUE, FETCH_TEMP_SUCCESS } from './actions'

const clicks = (state = 0, action) => {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return state + 1
    default:
      return state
  }
}

const acs = (state = [], action) => {
  switch (action.type) {
    case FETCH_TEMP_SUCCESS:
      return [...state, action.payload]
    default:
      return state
  }
}

export const Reducers = combineReducers({
  clicks,
  acs
})
