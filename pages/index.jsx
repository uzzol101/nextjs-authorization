import React from 'react'
import Link from 'next/link'
import {token} from '../api'
import {login} from '../helper/auth'
import Wrapper from '../components/Wrapper'
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
  <h4>Test section</h4>
  <Wrapper row={3} column={1} />
 </React.Fragment>
)

app.getInitialProps = async function (ctx) {
  
  
  return {
    value: ""
  }
}

export default app
