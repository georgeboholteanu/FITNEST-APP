import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center p-3 border-b border-blue-300'>
      <Link to="/"><h1>Auth</h1></Link>
      <ul>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/register"><li>Register</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar