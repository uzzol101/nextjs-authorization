import React, { Component } from 'react'
import Link from 'next/link'
import nextCookie from 'next-cookies'
import Cookie from 'js-cookie'
export default class b extends Component {
    static async getInitialProps (ctx) {
        
        return {

        }
    }
    logout = () => {
      Cookie.set('token', null)
      window.location.href = '/login'
    }
  render() {
    console.log("here is all props ", this.props)
    return (
      <div>
        <h4>Profile</h4>
        <Link href='/dashboard'>
        <a>go to dashboard</a>
      </Link>
      <br/>
      <br/>
      <button onClick={this.logout}>log out</button>
      </div>
    )
  }
}

