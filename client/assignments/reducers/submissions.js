import {
  DEFAULT_API_PAGE,
  DEFAULT_ASSIGNMENT_SUBMISSIONS,
} from 'client/constants'
import {
  FETCH_SUBMISSIONS,
  FETCH_ADDL_SUBMISSIONS,
} from 'client/assignments/actions/submissions'

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
      return state
  }
}
