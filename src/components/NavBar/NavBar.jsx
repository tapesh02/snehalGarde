import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import logo from "../../assets/logos/Logo3.svg";
import logo2 from "../../assets/logos/logo.svg";
import { Button } from "@mui/material";
import { BsMenuButtonWideFill } from "react-icons/bs";
import MobileNav from "./MobileNav";

const NavBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            {!isMobile ? (
                <div className="navBarMain">
                    <ul className="logo">
                        <NavLink to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </ul>
                    <ul className="navBarLinks">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/practice">Practice</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <span></span>
                        <NavLink to="/freeConsultation">
                            <Button variant="contained">Free Consultation</Button>
                        </NavLink>
                    </ul>
                </div>
            ) : (
                <div className="navBarMain mobileNavBarMain">
                    <ul className="logo">
                        <NavLink to="/">
                            <img src={logo2} alt="logo" />
                        </NavLink>
                    </ul>
                    <div className="menuIcon">
                        <MobileNav />
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
