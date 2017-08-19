import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FadeLoader } from 'halogen'

export default class Spinner extends Component {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
  }

  static defaultProps = {
    color: 'gray',
  }

  render() {
    const {
      className,
      color,
    } = this.props

    return (
      <div className={className}>
        <FadeLoader color={color} />
      </div>
    )
  }
}