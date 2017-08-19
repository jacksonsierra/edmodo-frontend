import axios from 'axios'
import { ACCESS_TOKEN } from 'client/constants'

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
