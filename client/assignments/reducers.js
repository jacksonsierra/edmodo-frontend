import {
  DEFAULT_API_PAGE,
  DEFAULT_SIDEBAR_ITEMS,
  DEFAULT_ASSIGNMENT_SUBMISSIONS,
} from 'client/constants'
import {
  FETCH_ASSIGNMENTS,
  FETCH_ADDL_ASSIGNMENTS,
} from 'client/actions/assignments'
import {
  FETCH_SUBMISSIONS,
  FETCH_ADDL_SUBMISSIONS,
} from 'client/actions/submissions'

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
      return { ...state }
  }
}

const initialSubmissionsState = {
  page: DEFAULT_API_PAGE,
  per_page: DEFAULT_ASSIGNMENT_SUBMISSIONS,
  data: [],
  isInitialLoading: false,
  isAdditionalLoading: false,
}

export const submissions = (
  state = initialSubmissionsState,
  action
) => {
  switch (action.type) {
    case FETCH_SUBMISSIONS.SUCCESS:
      return {
        ...state,
        ...action.payload,
        isInitialLoading: false,
      }
    case FETCH_ADDL_SUBMISSIONS.SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
        isAdditionalLoading: false,
      }
    case FETCH_SUBMISSIONS.ERROR:
      return { ...state, isInitialLoading: false }
    case FETCH_ADDL_SUBMISSIONS.ERROR:
      return { ...state, isAdditionalLoading: false }
    case FETCH_SUBMISSIONS.IN_PROGRESS:
      return { ...state, isInitialLoading: true }
    case FETCH_ADDL_SUBMISSIONS.IN_PROGRESS:
      return { ...state, isAdditionalLoading: true }
    default:
      return { ...state }
  }
}
