import { combineReducers } from 'redux'
import {
  assignments,
  submissions,
} from 'client/assignments/reducers'

export default combineReducers({
  assignments,
  submissions,
})
