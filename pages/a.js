import React from 'react';
import {token} from '../api'
import  {login} from '../helper/auth'
import Cookie from 'js-cookie'
import Link from 'next/link'
class HelloUA extends React.Component {
  static async getInitialProps({req, res,  ctx }) {
   try {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    // Cookie.set('cookie', 'value')
    return { userAgent };
   } catch  (error) {
       console.log(error)
   }
  }

  async componentDidMount () {
  }

  render() {
    console.log('page a token ', this.props.token)
    // Cookie.set('cook', 'value')
    return <div>Hello World {this.props.userAgent}  <Link href='/b' as='/b'>
    <a>b</a>
  </Link></div>;
  }
}

export default HelloUA;