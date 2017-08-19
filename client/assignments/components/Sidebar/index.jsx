import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SidebarItem from 'client/assignments/components/SidebarItem'
import Spinner from 'client/shared/components/Spinner'
import styles from './styles.css'

export default class Sidebar extends Component {
  static propTypes = {
    page: PropTypes.number,
    per_page: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.object),
    isInitialLoading: PropTypes.bool,
    isAdditionalLoading: PropTypes.bool,
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
        {!isInitialLoading && data.map((assignment) => (
          <SidebarItem
            key={assignment.id}
            {...assignment}
          />
        ))}
        {!isInitialLoading && isAdditionalLoading && (
          <Spinner className={styles.spinner} />
        )}
      </div>
    )
  }
}
