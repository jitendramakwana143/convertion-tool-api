import React from 'react'

import logo from '../assests/logo.png'

export default function Navbar() {
    
  return (
    <div style={{width:'100%'}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-dark" >
  <div className="container-fluid">
    <nav aria-label="breadcrumb" style={{width:'100%'}}>
      <ol className="breadcrumb " style={{backgroundColor:'#191919', fontSize:'25px'}} >
        <div className='item' style={{paddingLeft:'20px' }}>
        <a class="navbar-brand" href="#">
      <img
        src={logo}
        height="30"
        alt="MDB Logo"
        loading="lazy"
      />
    </a>
        </div>
        <li className="breadcrumb-item">
          <a href="#" className='text-success text-decoration-none'>Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="#" className='text-success text-decoration-none'>Library</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#" className='text-success text-decoration-none'>Data</a>
        </li>
      </ol>
    </nav>
  </div>
</nav>
    </div>
  )
}
