import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <ul className='navContents'>
            <li className='links'><Link to="/">Home</Link></li>
            <li className='links'><Link to="/menu">Menu</Link></li>
            <li className='links'><Link to="/book">Book</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar