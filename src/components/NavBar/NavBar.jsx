import React from "react";
import "./NavBar.scss";

import logo from "../../assets/logos/Logo3.svg";
import { Button, Link } from "@mui/material";

const NavBar = () => {
    return (
        <>
            <div className="navBarMain">
                <ul className="logo">
                    <img src={logo} alt={logo} />
                </ul>
                <ul className="navBarLinks">
                    <li>
                        <Link>Home</Link>{" "}
                    </li>
                    <li>
                        <Link>About </Link>
                    </li>
                    <li>
                        <Link>Practice </Link>
                    </li>
                    <li>
                        <Link>Contact </Link>
                    </li>
                    <span></span>
                    <Button variant="contained">Free Consultation</Button>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
