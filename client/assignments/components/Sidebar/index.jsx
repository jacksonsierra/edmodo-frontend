import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SidebarItem from 'client/assignments/containers/SidebarItem'
import styles from './styles.css'

export default class Sidebar extends Component {
  static propTypes = {
    assignments: PropTypes.arrayOf(PropTypes.object),
  }

  render() {
    const {
      assignments,
    } = this.props

    return (
      <div className={styles.container}>
        {assignments.map((assignment) => (
          <SidebarItem
            key={assignment.id}
            {...assignment}
          />
        ))}
      </div>
    )
  }
}
