import React from "react";
import { Route, Link, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import Contact from "./components/pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import ThemeTemplate from "./components/ui/ThemeTemplate";

const RouteLinks = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="contact" element={<Contact />} />
                <Route path="themetemplate" element={<ThemeTemplate />} />
            </Routes>
        </>
    );
};

export default RouteLinks;
