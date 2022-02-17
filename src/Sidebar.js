import React from 'react'
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )



    return (
        <div className="sidebar">
            <div className='sidebar__top'>
                <img src="https://images.unsplash.com/photo-1589967698280-1e86b3d8c1ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt=""/>
                <Avatar className='sidebar__avatar' />
                <h2>Syed Hassan</h2>
                <h4>syed@email.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed your page</p>
                    <p className="sidebar__statNumber">7,452</p>
                </div>
            
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">6,472</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                    <p>Recent</p>
                    {recentItem('Programming')}
                    {recentItem('Software Engineering')}
                    {recentItem('Full Stack Developer')}
                    {recentItem('UI/UX')}
            </div>

        </div>
    )
}

export default Sidebar;
