import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { formatDate } from 'client/utils'
import styles from './styles.css'

export default class SidebarItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    due_at: PropTypes.string,
  }

  render() {
    const {
      id,
      title,
      due_at,
    } = this.props
    const dueAt = formatDate(due_at)

    return (
      <Link
        to={`/assignments/${id}`}
        className={styles.link}
        activeClassName={styles.active}
      >
        <div className={styles.container}>
          <span className={styles.title}>{title}</span>
          <span className={styles.date}>{`due ${dueAt}`}</span>
        </div>
      </Link>
    )
  }
}
