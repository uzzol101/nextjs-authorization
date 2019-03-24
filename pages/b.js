import React, { Component } from 'react'
import Link from 'next/link'
import nextCookie from 'next-cookies'
export default class b extends Component {
    static async getInitialProps (ctx) {
        
        return {

        }
    }
  render() {
    console.log("here is all props ", this.props)
    return (
      <div>
        <Link href='/a' as='/a'>
        <a>a</a>
      </Link>
      </div>
    )
  }
}

