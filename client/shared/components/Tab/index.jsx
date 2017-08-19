import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class Tab extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    isActive: PropTypes.bool,
  }

  render() {
    const {
      className,
      onClick,
      text,
      isActive,
    } = this.props

    return (
      <div className={styles.container}>
        <a
          className={
            `${styles.tab}
            ${className || ''}
            ${isActive && styles.active || ''}`}
          onClick={onClick}
        >
          {text}
        </a>
      </div>
    )
  }
}
