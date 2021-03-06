import React from 'react'
import Link from 'next/link'


function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
      <div className="container-fluid">
        <Link href="/">
        <a className="navbar-brand" >Navbar</a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/home">
              <a className="nav-link active" aria-current="page" >Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
              <a className="nav-link" >About</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" >Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
