import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Item />
      </div>
    )
  }
}
