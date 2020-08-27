/* eslint-disable react/jsx-no-undef */
import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sign-up">Sign-Up</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/courses" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Courses
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/data-science">DATA SCIENCE</a>
                            <a className="dropdown-item" href="/programming">PROGRAMMING</a>bootstrap for re
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/artificial-intelligence">ARTIFICIAL INTELLIGENCE</a>
                            <a className="dropdown-item" href="/cloud-computing">CLOUD COMPUTING</a>
                            <a className="dropdown-item" href="/autonomous-system">AUTONOMOUS SYSTEMS</a>
                        </div>
                    </li>
                </ul>

    <a className="navbar-brand" href="/home"><img src="../../images/download.png" alt=""/>Pro Academy</a>
  </div>
</nav>
    )
};

export default Navbar;