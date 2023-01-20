import React from 'react'
import  Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Portal() {
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <Nav/>
                    <div class="container-fluid">
                        <Outlet></Outlet>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Portal