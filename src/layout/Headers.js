import React from 'react'
import { Link } from 'react-router-dom'
import '../assets1/css/Headers.css'
import {  FaHome, FaLaptop, } from "react-icons/fa";



export default function Header(props) {
  return (
    <>
      {/* <!-- Side navigation --> */}
      <div className="sidenav">
        <h1 href="#" className='h1 text-white'> <FaLaptop /> MCD</h1>
        <hr />

        <Link to='/CountryList'><FaHome /> CountryList</Link>

      
       
      </div>



    </>
  )
}
