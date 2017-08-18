import axios from 'axios'
import { ACCESS_TOKEN } from 'client/constants'

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

export const getAssignments = ({
  page,
  per_page,
}) => {
  return axios({
    url: `https://api.edmodo.com/assignments?access_token=${ACCESS_TOKEN}&page=${page}&per_page=${per_page}`,
    method: 'GET',
  })
}

export const getAssignmentsList = (dispatch) => (options) => {
  dispatch({ type: FETCH_ASSIGNMENTS.IN_PROGRESS })
  return getAssignments(options)
    .then((data) => dispatch({
      type: FETCH_ASSIGNMENTS.SUCCESS,
      payload: { data },
    }))
    .catch((error) => {
      dispatch({ type: FETCH_ASSIGNMENTS.ERROR })
      throw error
    })
}

export const getAdditionalAssignments = (dispatch) => (options) => {
  dispatch({ type: FETCH_ADDL_ASSIGNMENTS.IN_PROGRESS })
  return getAssignments(options)
    .then((data) => dispatch({
      type: FETCH_ADDL_ASSIGNMENTS.SUCCESS,
      payload: { data },
    }))
    .catch((error) => {
      dispatch({ type: FETCH_ADDL_ASSIGNMENTS.ERROR })
      throw error
    })
}
