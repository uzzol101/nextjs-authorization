import React from 'react';
import {token} from '../api'
import  {login} from '../helper/auth'
import Cookie from 'js-cookie'
import Link from 'next/link'
class Dashboard extends React.Component {
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
    return <div>
      <h4>Dashboard</h4>
   <Link href='/profile'>
    <a>go to profile</a>
  </Link></div>;
  }
}

export default Dashboard;