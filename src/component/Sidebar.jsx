import React from 'react';
import 
{BsCloudSun, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';

 import {NavLink} from 'react-router-dom';
 

function Sidebar({openSidebarToggle, OpenSidebar}) {

    const activeLink = "backgroundColor:white, color:black, text-decoration:none";
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <NavLink to="/">
                <BsCloudSun   className='icon_header'/> E-Vision
                </NavLink>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <NavLink to="/"  style={({ isActive }) => ({
                                color: isActive ? "greenyellow": "white",
                                backgroundColor: isActive ? "black !important" : "",
                            })}>
                <li className='sidebar-list-item'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </li>
            </NavLink>
            <NavLink to="/profile"   style={({ isActive }) => ({
                                color: isActive ? "greenyellow": "white",
                                backgroundColor: isActive ? "black" : "",
                            })}>
                <li className='sidebar-list-item'>
                    
                    <BsFillArchiveFill className='icon'/> Profile
                    
                </li>
            </NavLink>
            
            <NavLink to="/environment"  style={({ isActive }) => ({
                                color: isActive ? "greenyellow": "white",
                                backgroundColor: isActive ? "black" : "",
                            })}>
                <li className='sidebar-list-item'>
                    <BsFillGrid3X3GapFill className='icon'/> Environment Initiatives
                </li>
            </NavLink>
            
            <NavLink to="/action"  style={({ isActive }) => ({
                                color: isActive ? "greenyellow": "white",
                                backgroundColor: isActive ? "black" : "",
                            })}>
                <li className='sidebar-list-item'>
                    <BsPeopleFill className='icon'/> Action Tracking
                </li>
            </NavLink>
            <NavLink to="/community"  style={({ isActive }) => ({
                                color: isActive ? "greenyellow": "white",
                                backgroundColor: isActive ? "black" : "",
                            })}>
                <li className='sidebar-list-item'>
                    <BsListCheck className='icon'/>  Community
                </li>
            </NavLink>
            
            <NavLink to="/challenges"  style={({ isActive }) => ({
                                color: isActive ? "greenyellow": "white",
                                backgroundColor: isActive ? "black" : "",
                            })}>
                <li className='sidebar-list-item'>
                    <BsMenuButtonWideFill className='icon'/> Challenges/Rewards
                </li>
            </NavLink>
            
            
            <NavLink to="/resources"  style={({ isActive }) => ({
                                color: isActive ? "greenyellow": "white",
                                backgroundColor: isActive ? "black" : "",
                            })}>
                <li className='sidebar-list-item'>
                    <BsFillGearFill className='icon'/> Resources
                </li>
            </NavLink>
           
            {/* <li className='sidebar-list-item'>
                <NavLink to="/map">
                    <BsFillGearFill className='icon'/> Map
                </NavLink>
            </li> */}
        </ul>
    </aside>
  )
}

export default Sidebar