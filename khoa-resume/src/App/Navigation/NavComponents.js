import React, { Component } from 'react'
import nav from './nav.module.scss'


export class NavComponents extends Component {
  render() {
    return (
      <div className={`nav-header container ${nav.nav}`}>
        <span>Navigation</span>
      </div>
    )
  }
}

export default NavComponents