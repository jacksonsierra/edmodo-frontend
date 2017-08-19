import { combineReducers } from 'redux'
import { assignments } from 'client/assignments/reducers/assignments'
import { submissions } from 'client/assignments/reducers/submissions'

export default combineReducers({
  assignments,
  submissions,
})
