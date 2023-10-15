import React from "react";
import { Route, Link, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import Contact from "./components/pages/Contact/Contact";

const RouteLinks = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
    );
};

export default RouteLinks;
