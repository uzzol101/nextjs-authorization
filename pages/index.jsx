import React from 'react'
import Link from 'next/link'
import {token} from '../api'
import {login} from '../helper/auth'
const app =  (props) => (
 <React.Fragment>
    <i>No authorization need for this page</i>
    <hr/>
    <b>Authorized pages are :</b>
      <ul>
        <li>dashboard</li>
        <li>profile</li>
      </ul>
      <hr/>
    <ul>
      
    <li>
      <Link href='/dashboard' >
        <a>dashboard</a>
      </Link>
    </li>
    <li>
    
      <Link href='/profile'>
        <a>profile </a>
      </Link>
    </li>
    <li>
      <Link href='/login'>
        <a>login </a>
      </Link>
    </li>
  </ul>
  
 </React.Fragment>
)

app.getInitialProps = async function (ctx) {
  
  
  return {
    value: ""
  }
}

export default app
