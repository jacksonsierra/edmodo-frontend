import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export const ARROW_DIRECTIONS = Object.freeze({
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
})

export class Arrow extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    direction: PropTypes.string,
  }

  static defaultProps = {
    direction: ARROW_DIRECTIONS.DOWN,
  }

  render() {
    const className = this.getClassName()

    return (
      <div
        className={`${styles.container} ${className}`}
        onClick={this.props.onClick || null}
      />
    )
  }

  getClassName = () => {
    const { direction } = this.props

    switch (direction) {
      case ARROW_DIRECTIONS.UP:
        return styles.up
      case ARROW_DIRECTIONS.LEFT:
        return styles.left
      case ARROW_DIRECTIONS.RIGHT:
        return styles.right
      default:
        return styles.down
    }
  }
}
