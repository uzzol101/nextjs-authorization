import React, { Component } from 'react'
import Link from 'next/link'
import nextCookie from 'next-cookies'
import Cookie from 'js-cookie'
export default class Signup extends Component {
  static async getInitialProps(ctx) {

    return {

    }
  }
  render() {

    return (
      <div>
        <i>No authorization need for this page</i>

        <h4>Sign up</h4>
        <Link href='/dashboard'>
          <a>go to dashboard</a>
        </Link>
      </div>
    )
  }
}

