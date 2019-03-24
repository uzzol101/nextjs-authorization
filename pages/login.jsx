import Router from 'next/router'
import Cookie from 'js-cookie'

import React, { Component } from 'react'

export default class login extends Component {
  handleLogin = () => {
    Cookie.set('token', 'secret_token')
    Router.push('/dashboard')

  }
  render() {
    return (
      <div>
        <div>Login page</div>
        <br/><br/>
        <button onClick={this.handleLogin}>login</button>
      </div>
    )
  }
}
