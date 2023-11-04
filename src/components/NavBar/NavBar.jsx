import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/logos/Logo3.svg";
import logo2 from "../../assets/logos/logo.svg";
import { Button } from "@mui/material";

let deviceWidth = 500;
const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => (window.innerWidth < deviceWidth ? setIsMobile(true) : setIsMobile(false));

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {!isMobile ? (
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
                            <img src={logo2} alt={logo} />
                        </NavLink>
                    </ul>
                    <ul className="navBarLinks mobileNavLinks">
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
            )}
        </>
    );
};

export default NavBar;
