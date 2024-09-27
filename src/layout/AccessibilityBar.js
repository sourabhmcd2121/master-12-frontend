import React from 'react'
import {  FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function TopNavbar() {
    return (
        <div>
            <header className="navbar navbar-fixed-top bg-primary">
                <div className="navbar-logo-wrapper">
                    <Link className="navbar-logo-text" href="dashboard1.html">
                      <FaLock/>
                    </Link>
                    <span id="sidebar_left_toggle" className="ad ad-lines"></span>
                </div>

                <div className="project-title">
                    <span>Master Data Management System</span>
                </div>

                <div className="tooltip-new2">
                    <div className="tooltiptext2"></div>

                </div>
                 {/* <form className="navbar-form navbar-left search-form square" role="search">
                    <div className="input-group add-on">

                        <input className="form-control" placeholder="Search..." onfocus="this.placeholder=''" onblur="this.placeholder='Search...'" type="text"/>

                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                            </div>

                    </div>
                </form>  */}
               
            </header>
        </div>
    )
}
