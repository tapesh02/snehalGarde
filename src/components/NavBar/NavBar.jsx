import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./NavBar.scss";

import logo from "../../assets/logos/Logo3.svg";
import { Button } from "@mui/material";

const NavBar = () => {
    const location = useLocation();

    return (
        <>
            <div className="navBarMain">
                <ul className="logo">
                    <NavLink to="/">
                        <img src={logo} alt={logo} />
                    </NavLink>
                </ul>
                <ul className="navBarLinks">
                    <li>
                        <NavLink to="/" className={`${location.pathname === "/" ? "homeActive" : "homeNotActive"}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={`${location.pathname === "/" ? "homeActive" : "homeNotActive"}`}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/practice"
                            className={`${location.pathname === "/" ? "homeActive" : "homeNotActive"}`}>
                            Practice
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={`${location.pathname === "/" ? "homeActive" : "homeNotActive"}`}>
                            Contact
                        </NavLink>
                    </li>
                    <span></span>
                    <NavLink to="/freeConsultation">
                        <Button variant="contained">Free Consultation</Button>
                    </NavLink>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
