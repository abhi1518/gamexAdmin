import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    const changeStyle1 = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    return (
        <div>
            <ul className={style} id="accordionSidebar">

                {/*  <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Gamex</div>
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                    </div>
                </a>

                {/*   <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/*  <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <a className="nav-link" href="/dashboard">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                <hr className="sidebar-divider" />

                {/* <!-- Nav Item - Charts --> */}
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/all-user">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>All User</span></Link>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUser"
                        aria-expanded="true" aria-controls="collapseUser">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>user</span>
                    </a>
                    <div id="collapseUser" className="collapse" aria-labelledby="headingUser" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all-user">All User</Link>
                            <Link className="collapse-item" to="/add-balance">Add Balance</Link>
                            <Link className="collapse-item" to="/reduce-balance">Reduce Balance</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAdminAgent"
                        aria-expanded="true" aria-controls="collapseAdminAgent">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Admin Agent</span>
                    </a>
                    <div id="collapseAdminAgent" className="collapse" aria-labelledby="headingAdminAgent" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all-admin-agent">All Admin Agent</Link>
                            <Link className="collapse-item" to="/add-admin-agent">Add Admin Agent</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseAgent"
                        aria-expanded="true" aria-controls="collapseAgent">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Agent</span>
                    </a>
                    <div id="collapseAgent" className="collapse" aria-labelledby="headingAgent" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all-agent">All Agent</Link>
                            <Link className="collapse-item" to="/add-agent">Add Agent</Link>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBank"
                        aria-expanded="true" aria-controls="collapseBank">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Bank Detail</span>
                    </a>
                    <div id="collapseBank" className="collapse" aria-labelledby="headingBank" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/admin-all-bank-details">All Bank Detail</Link>
                            <Link className="collapse-item" to="/admin-bank-details">Add Bank Detail</Link>
                        </div>
                    </div>
                </li>
                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

            </ul>
        </div>
    )
}

export default Sidebar