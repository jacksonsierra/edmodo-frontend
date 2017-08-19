import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Tab from 'client/shared/components/Tab'
import AssignmentDetails from 'client/assignments/components/AssignmentDetails'
import Submissions from 'client/assignments/containers/Submissions'
import styles from './styles.css'

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.params.id,
  assignments: state.assignments,
})

const mapDispatchToProps = {}

@connect(mapStateToProps, mapDispatchToProps)
export default class Assignment extends Component {
  static propTypes = {
    id: PropTypes.string,
    assignments: PropTypes.object,
    getSubmissionsList: PropTypes.func,
  }

  constructor() {
    super()

    this.state = {
      showAssignmentDetails: true,
    }
  }

  render() {
    const {
      id: assignmentId,
      assignments,
    } = this.props
    const { showAssignmentDetails } = this.state
    const assignment = _.find(assignments.data, ({ id }) => (
      id === Number(assignmentId)
    ))

    return (
      <div className={styles.container}>
        <div className={styles.tabs}>
          <Tab
            className={styles.tab}
            onClick={this.onClickAssignmentTab}
            text="Assignment"
            isActive={showAssignmentDetails}
          />
          <Tab
            className={styles.tab}
            onClick={this.onClickSubmissionsTab}
            text="Submissions"
            isActive={!showAssignmentDetails}
          />
        </div>
        {showAssignmentDetails && <AssignmentDetails {...assignment} />}
        {!showAssignmentDetails && <Submissions assignment={assignment} />}
      </div>
    )
  }

  onClickAssignmentTab = () => this.setState({ showAssignmentDetails: true })

  onClickSubmissionsTab = () => this.setState({ showAssignmentDetails: false })
}
