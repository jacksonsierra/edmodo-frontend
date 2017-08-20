import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Arrow,
  ARROW_DIRECTIONS,
} from 'client/shared/components/Arrow'
import { formatDate } from 'client/utils'
import styles from './styles.css'

export default class Submission extends Component {
  static propTypes = {
    id: PropTypes.number,
    creator: PropTypes.object,
    content: PropTypes.string,
    submitted_at: PropTypes.string,
  }

  constructor() {
    super()

    this.state = {
      showContent: false,
    }
  }

  render() {
    const {
      creator,
      content,
      submitted_at,
    } = this.props
    const { showContent } = this.state
    const submittedAt = formatDate(submitted_at)

    return (
      <div className={styles.container}>
        <div
          className={styles.row}
          onClick={this.onClickArrow}
        >
          <img
            className={styles.avatar}
            src={creator.avatars.large}
          />
          <div className={styles.text}>
            <h2 className={styles.creator}>
              {`${creator.first_name} ${creator.last_name}`}
            </h2>
            <span className={styles.date}>{submittedAt}</span>
          </div>
          <Arrow direction={this.getArrowDirection()} />
        </div>
        {showContent && (
          <div className={styles.content}>
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }

  onClickArrow = () => {
    this.setState({
      showContent: !this.state.showContent,
    })
  }

  getArrowDirection = () => {
    if (this.state.showContent) {
      return ARROW_DIRECTIONS.UP
    }

    return ARROW_DIRECTIONS.DOWN
  }
}
