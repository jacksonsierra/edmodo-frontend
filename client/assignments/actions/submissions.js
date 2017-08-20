import axios from 'axios'
import { ACCESS_TOKEN } from 'client/constants'

/**
 * Submissions action types that send information
 * from app to the submissions data store
 */
export const FETCH_SUBMISSIONS = {
  IN_PROGRESS: 'FETCH_SUBMISSIONS/IN_PROGRESS',
  SUCCESS: 'FETCH_SUBMISSIONS/SUCCESS',
  ERROR: 'FETCH_SUBMISSIONS/ERROR',
}

export const FETCH_ADDL_SUBMISSIONS = {
  IN_PROGRESS: 'FETCH_ADDL_SUBMISSIONS/IN_PROGRESS',
  SUCCESS: 'FETCH_ADDL_SUBMISSIONS/SUCCESS',
  ERROR: 'FETCH_ADDL_SUBMISSIONS/ERROR',
}

/**
 * Sends a request to Edmodo API to get an assignment's submissions
 * @param {object} options
 *  @param {number} assignment_id The assignment id.
 *  @param {number} assignment_creator_id The user id of the assignment creator.
 *  @param {number} page The page of results.
 *  @param {number} per_page The number of results per page.
 * @return {Promise} API response
 */
export const getSubmissions = ({
  assignment_id,
  assignment_creator_id,
  page,
  per_page,
}) => {
  return axios({
    url: `https://api.edmodo.com/assignment_submissions?assignment_id=${assignment_id}&assignment_creator_id=${assignment_creator_id}&access_token=${ACCESS_TOKEN}&page=${page}&per_page=${per_page}`,
    method: 'GET',
  })
}

/**
 * Bound action creator that will update store with an assignment's submissions
 * @param {object} options
 *  @param {number} assignment_id The assignment id.
 *  @param {number} assignment_creator_id The user id of the assignment creator.
 *  @param {number} page The page of results.
 *  @param {number} per_page The number of results per page.
 * @return {function}
 */
export const getSubmissionsList = (options) => (dispatch) => {
  dispatch({ type: FETCH_SUBMISSIONS.IN_PROGRESS })
  return getSubmissions(options)
    .then(({ data }) => dispatch({
      type: FETCH_SUBMISSIONS.SUCCESS,
      payload: { data },
    }))
    .catch((error) => {
      dispatch({ type: FETCH_SUBMISSIONS.ERROR })
      throw error
    })
}

/**
 * Bound action creator that will update store with additional submissions
 * for an assignment, can be used when results should be paginated
 * @param {object} options
 *  @param {number} assignment_id The assignment id.
 *  @param {number} assignment_creator_id The user id of the assignment creator.
 *  @param {number} page The page of results.
 *  @param {number} per_page The number of results per page.
 * @return {function}
 */
export const getAdditionalSubmissions = (options) => (dispatch) => {
  dispatch({ type: FETCH_ADDL_SUBMISSIONS.IN_PROGRESS })
  return getSubmissions(options)
    .then(({ data }) => dispatch({
      type: FETCH_ADDL_SUBMISSIONS.SUCCESS,
      payload: { data },
    }))
    .catch((error) => {
      dispatch({ type: FETCH_ADDL_SUBMISSIONS.ERROR })
      throw error
    })
}
