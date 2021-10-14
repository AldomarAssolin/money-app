import '../common/template/dependecies.js'
import React from 'react'

import Header from '../common/template/Header'
import Sidebar from '../common/template/Sidebar'
import Footer from '../common/template/Footer'
import Routes from './Routes'


export default props => (
    <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className="content-wrapper">
            <div className="content-wrapper-box">
                <Routes/>
            </div>
        </div>
        <Footer/>
    </div>
)