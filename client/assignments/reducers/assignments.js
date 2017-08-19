import {
  DEFAULT_API_PAGE,
  DEFAULT_SIDEBAR_ITEMS,
} from 'client/constants'
import {
  FETCH_ASSIGNMENTS,
  FETCH_ADDL_ASSIGNMENTS,
} from 'client/assignments/actions/assignments'

const initialAssignmentsState = {
  page: DEFAULT_API_PAGE,
  per_page: DEFAULT_SIDEBAR_ITEMS,
  data: [],
  isInitialLoading: false,
  isAdditionalLoading: false,
}

export const assignments = (
  state = initialAssignmentsState,
  action
) => {
  switch (action.type) {
    case FETCH_ASSIGNMENTS.SUCCESS:
      return {
        ...state,
        ...action.payload,
        isInitialLoading: false,
      }
    case FETCH_ADDL_ASSIGNMENTS.SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
        isAdditionalLoading: false,
      }
    case FETCH_ASSIGNMENTS.ERROR:
      return { ...state, isInitialLoading: false }
    case FETCH_ADDL_ASSIGNMENTS.ERROR:
      return { ...state, isAdditionalLoading: false }
    case FETCH_ASSIGNMENTS.IN_PROGRESS:
      return { ...state, isInitialLoading: true }
    case FETCH_ADDL_ASSIGNMENTS.IN_PROGRESS:
      return { ...state, isAdditionalLoading: true }
    default:
      return state
  }
}
