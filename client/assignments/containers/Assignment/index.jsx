import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Tab from 'client/shared/components/Tab'
import AssignmentDetails from 'client/assignments/components/AssignmentDetails'
import styles from './styles.css'

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.params.id,
  assignments: state.assignments,
})

@connect(mapStateToProps)
export default class Assignment extends Component {
  static propTypes = {
    children: PropTypes.node,
    id: PropTypes.string,
    assignments: PropTypes.object,
  }

  render() {
    const {
      children,
      id: assignmentId,
      assignments,
    } = this.props
    const assignment = _.find(assignments.data, ({ id }) => (
      id === Number(assignmentId)
    ))

    return (
      <div className={styles.container}>
        <div className={styles.tabs}>
          <Tab
            to={`/assignments/${assignmentId}`}
            text="Assignment"
          />
          <Tab
            to={`/assignments/${assignmentId}/submissions`}
            text="Submissions"
          />
        </div>
        {children || <AssignmentDetails {...assignment} />}
      </div>
    )
  }
}
