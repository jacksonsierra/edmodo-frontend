import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import moment from 'moment'
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

    return (
      <div className={styles.container}>
        <Link to={id}>
          <span className={styles.title}>{title}</span>
          <span className={styles.date}>{`due ${moment(due_at)}`}</span>
        </Link>
      </div>
    )
  }
}
