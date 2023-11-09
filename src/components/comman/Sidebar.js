import React, { useState } from 'react';

function Sidebar() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
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
                <li className="nav-item">
                    <a className="nav-link" href="/add-agent">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Add Agent     </span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/add-user">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Add User     </span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/add-points">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Add Points    </span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/remove-points">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Remove Points     </span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/delete-user">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Delete User    </span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="delete-agent">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Delete Agent    </span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="charts.html">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Add Bank Detail   </span></a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

            </ul>
        </div>
    )
}

export default Sidebar