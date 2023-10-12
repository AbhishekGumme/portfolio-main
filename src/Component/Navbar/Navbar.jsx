import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
           <div className="n-name">Aabhishek Gumme
           </div>
           <Toggle />
        </div>
        <div className="n-right">
           <div className="n-list">
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experiences</li>
               </ul>
           </div>
          <button className='btn'>
            Contact
          </button> 
        </div>
    </div>
  )
}

export default Navbar