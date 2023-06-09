import React from 'react'
import './Sidebar.css'
import logo from '../assets/icons8-task-management-78.png'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <img src={logo} alt='logo' />
                <h5 id='app-name'>TeamTasker</h5>
            </div>
            <div className='links'>
                <a href='/'>Dashboard</a>
                <a href='/projects'>Projects</a>
                <a href='/new'>New</a>
            </div>
        </div>
    )
}

export default Sidebar