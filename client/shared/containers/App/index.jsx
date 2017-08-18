import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import RootModal from 'client/shared/containers/RootModal'
import '!style-loader!css-loader!client/global.css'
import styles from './styles.css'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={styles.container}>
        <RootModal />
        {this.props.children}
      </div>
    )
  }
}
