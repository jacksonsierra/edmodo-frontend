import axios from 'axios'
import { ACCESS_TOKEN } from 'client/constants'

/**
 * Assignments action types that send information
 * from app to the assignments data store
 */
export const FETCH_ASSIGNMENTS = {
  IN_PROGRESS: 'FETCH_ASSIGNMENTS/IN_PROGRESS',
  SUCCESS: 'FETCH_ASSIGNMENTS/SUCCESS',
  ERROR: 'FETCH_ASSIGNMENTS/ERROR',
}

export const FETCH_ADDL_ASSIGNMENTS = {
  IN_PROGRESS: 'FETCH_ADDL_ASSIGNMENTS/IN_PROGRESS',
  SUCCESS: 'FETCH_ADDL_ASSIGNMENTS/SUCCESS',
  ERROR: 'FETCH_ADDL_ASSIGNMENTS/ERROR',
}

/**
 * Sends a request to Edmodo API to get assignments
 * @param {object} options
 *  @param {number} page The page of results.
 *  @param {number} per_page The number of results per page.
 * @return {Promise} API response
 */
export const getAssignments = ({
  page,
  per_page,
}) => {
  return axios({
    url: `https://api.edmodo.com/assignments?access_token=${ACCESS_TOKEN}&page=${page}&per_page=${per_page}`,
    method: 'GET',
  })
}

/**
 * Bound action creator that will update store with assignments
 * @param {object} options
 *  @param {number} page The page of results.
 *  @param {number} per_page The number of results per page.
 * @return {function}
 */
export const getAssignmentsList = (options) => (dispatch) => {
  dispatch({ type: FETCH_ASSIGNMENTS.IN_PROGRESS })
  return getAssignments(options)
    .then(({ data }) => dispatch({
      type: FETCH_ASSIGNMENTS.SUCCESS,
      payload: { data },
    }))
    .catch((error) => {
      dispatch({ type: FETCH_ASSIGNMENTS.ERROR })
      throw error
    })
}

/**
 * Bound action creator that will update store with additional assignments,
 * can be used when results should be paginated
 * @param {object} options
 *  @param {number} page The page of results.
 *  @param {number} per_page The number of results per page.
 * @return {function}
 */
export const getAdditionalAssignments = (options) => (dispatch) => {
  dispatch({ type: FETCH_ADDL_ASSIGNMENTS.IN_PROGRESS })
  return getAssignments(options)
    .then(({ data }) => dispatch({
      type: FETCH_ADDL_ASSIGNMENTS.SUCCESS,
      payload: { data },
    }))
    .catch((error) => {
      dispatch({ type: FETCH_ADDL_ASSIGNMENTS.ERROR })
      throw error
    })
}
