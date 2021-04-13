import React from 'react'
import Head from 'next/head'
import Navbar from '../module/Navbar'
function Layout(props) {
  
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      {props.isNav &&
      <Navbar/>
      }
      {props.children}
    </div>
  )
}

export default Layout
