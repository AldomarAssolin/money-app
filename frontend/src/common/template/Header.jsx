import React from 'react'

export default props => (
    <header className="main-header">
        <a href="/" className="logo">
            <span className="logo-mini"><b>My</b>M</span>
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> My</b>Money
            </span>
        </a>
        <nav className="navbar navbar-static-top d-flex">
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <div className="icons">
                <a href="#"><i className='fa fa-bell pull-right'></i> </a>
                <a href="#"><i className='fa fa-user pull-right'></i> </a>
            </div>
        </nav>
    </header>
)