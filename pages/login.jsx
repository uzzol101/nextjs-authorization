import Router from 'next/router'
import Cookie from 'js-cookie'

import React, { Component } from 'react'

export default class login extends Component {
  static async getInitialProps(ctx) {
    return {
      name: "uzzol"
    }
  }
  handleLogin = () => {
    Cookie.set('token', 'secret_token')
    Router.push('/dashboard')

  }
  render() {
    return (
      <div>
        {this.props.name}
        <div>Login page</div>
        <br/><br/>
        <button onClick={this.handleLogin}>login</button>
      </div>
    )
  }
}
