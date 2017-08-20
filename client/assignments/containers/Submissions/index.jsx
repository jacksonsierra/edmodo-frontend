import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Submission from 'client/assignments/components/Submission'
import Spinner from 'client/shared/components/Spinner'
import { getSubmissionsList } from 'client/assignments/actions/submissions'
import styles from './styles.css'

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.params.id,
  assignments: state.assignments,
  ...state.submissions,
})

const mapDispatchToProps = {
  getSubmissionsList,
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Submissions extends Component {
  static propTypes = {
    id: PropTypes.string,
    assignments: PropTypes.object,
    page: PropTypes.number,
    per_page: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object),
    isInitialLoading: PropTypes.bool,
    isAdditionalLoading: PropTypes.bool,
    getSubmissionsList: PropTypes.func,
  }

  componentDidMount() {
    if (this.props.assignments.data.length) {
      this.getAssignmentSubmissions()
    }
  }

  componentDidUpdate({ assignments }) {
    if (!assignments.data.length && this.props.assignments.data.length)
    this.getAssignmentSubmissions()
  }

  render() {
    const {
      data,
      isInitialLoading,
      isAdditionalLoading,
    } = this.props

    return (
      <div className={styles.container}>
        {isInitialLoading && <Spinner className={styles.spinner} />}
        {!isInitialLoading && data.map((submission) => (
          <Submission
            key={submission.id}
            {...submission}
          />
        ))}
        {!isInitialLoading && isAdditionalLoading && (
          <Spinner className={styles.spinner} />
        )}
      </div>
    )
  }

  getAssignmentSubmissions = () => {
    const {
      id: assignmentId,
      assignments,
      page,
      per_page,
    } = this.props
    const assignment = _.find(assignments.data, ({ id }) => (
      id === Number(assignmentId)
    ))
    const { id: assignment_id } = assignment
    const { id: assignment_creator_id } = assignment.creator
    this.props.getSubmissionsList({
      assignment_id,
      assignment_creator_id,
      page,
      per_page,
    })
  }
}
