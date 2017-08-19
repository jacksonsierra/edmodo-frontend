import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDate } from 'client/utils'
import styles from './styles.css'

export default class AssignmentDetails extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    due_at: PropTypes.string,
  }

  render() {
    const {
      title,
      description,
      due_at,
    } = this.props
    const dueAt = formatDate(due_at)

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.date}>{`due ${dueAt}`}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    )
  }
}
