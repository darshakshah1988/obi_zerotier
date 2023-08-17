import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';





export function Sidebar(props) {


    return (
        <>
        <nav className="main-menu">
            <center><img src="https://ik.imagekit.io/qmm9bxxcw/IOT/OBI_Logo.png?updatedAt=1691582029328" style={{ "width": "80px", "height": "80px" }} /></center>
            <ul>
                <li>
                    <a href="/dashboard">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                           Dashboard
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a href="#">
                        <i className="fa fa-globe fa-2x"></i>
                        <span className="nav-text">
                            Device List
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="/dashboard/networks">
                       <i className="fa fa-comments fa-2x"></i>
                        <span className="nav-text">
                            Network List
                        </span>
                    </a>
                    
                </li>
                {/* <li className="has-subnav">
                    <a href="#">
                       <i className="fa fa-camera-retro fa-2x"></i>
                        <span className="nav-text">
                            Get Network Configurations
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-film fa-2x"></i>
                        <span className="nav-text">
                            Surveying Tutorials
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-book fa-2x"></i>
                        <span className="nav-text">
                           Surveying Jobs
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i className="fa fa-cogs fa-2x"></i>
                        <span className="nav-text">
                            Tools & Resources
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i className="fa fa-map-marker fa-2x"></i>
                        <span className="nav-text">
                            Member Map
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i className="fa fa-info fa-2x"></i>
                        <span className="nav-text">
                            Documentation
                        </span>
                    </a>
                </li> */}
            </ul>

            <ul className="logout">
                <li>
                    <Link to='/'>
                  
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    
                    </Link>
                </li>  
            </ul>
        </nav>
            
        </>
    )
}
