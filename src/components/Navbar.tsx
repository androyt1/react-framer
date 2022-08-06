import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-[60px] flex justify-between items-center px-3 shadow-lg shadow-slate-50 bg-gradient-to-r from-purple-700 to-gray-800 text-slate-50'>
        <h6 className='text-xl text-slate-50 font-semibold'>Novo</h6>
        <ul className='space-x-3'>
            <li className='inline-block text-xs'><NavLink to='/'>Home</NavLink></li>
            <li className='inline-block text-xs'><NavLink to='/about'>About</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar