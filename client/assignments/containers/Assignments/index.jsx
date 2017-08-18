import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BlankAssignment from 'client/assignments/components/BlankAssignment'
import Sidebar from 'client/assignments/components/Sidebar'
import { getAssignmentsList } from 'client/assignments/actions/assignments'
import styles from './styles.css'

const mapStateToProps = (state) => state

const mapDispatchToProps = {
  getAssignmentsList,
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Assignments extends Component {
  static propTypes = {
    children: PropTypes.node,
    assignments: PropTypes.object,
    getAssignmentsList: PropTypes.func,
  }

  componentDidMount() {
    const {
      page,
      per_page,
    } = this.props.assignments
    this.props.getAssignmentsList({ page, per_page })
  }

  render() {
    const {
      assignments,
      children,
    } = this.props

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Assignments</h1>
        <div className={styles.body}>
          <Sidebar {...assignments} />
          {children || <BlankAssignment />}
        </div>
      </div>
    )
  }
}
