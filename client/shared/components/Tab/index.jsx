import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import styles from './styles.css'

export default class Tab extends Component {
  static propTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    text: PropTypes.string,
  }

  render() {
    const {
      className,
      to,
      text,
    } = this.props

    return (
      <div className={styles.container}>
        <Link
          to={to}
          className={`${styles.tab} ${className || ''}`}
          activeClassName={styles.active}
          onlyActiveOnIndex
        >
          {text}
        </Link>
      </div>
    )
  }
}
