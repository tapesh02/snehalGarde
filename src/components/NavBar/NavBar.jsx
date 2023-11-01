import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.scss";

import logo from "../../assets/logos/Logo3.svg";
import { Button } from "@mui/material";

const NavBar = () => {
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
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About </NavLink>
                    </li>
                    <li>
                        <NavLink to="/practice">Practice </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact </NavLink>
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
