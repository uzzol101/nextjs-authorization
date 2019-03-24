import React from 'react'
import Link from 'next/link'
import {token} from '../api'
import {login} from '../helper/auth'
const app =  (props) => (
 <React.Fragment>
   
    <ul>
    <li>
      <Link href='/b' as='/a'>
        <a>a {props.value}</a>
      </Link>
    </li>
    <li>
      <Link href='/a' as='/b'>
        <a>b</a>
      </Link>
    </li>
  </ul>
  
 </React.Fragment>
)

app.getInitialProps = async function (ctx) {
  
    ctx.res.writeHead(302, {Location:"/login"})
    ctx.res.end()

  let tokenVal = await token
  login(tokenVal)
  return {
    value: tokenVal
  }
}

export default app


// const app =  (props) => (
// <div>Hello</div>
// )

// app.getInitialProps = async function(){
// try {
//   return {
//     token: 'vue'
//   }

// } catch(e) {
//   throw new Error(e);
// }
// }

// export default app