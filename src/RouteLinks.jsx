import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import Contact from "./components/pages/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import ThemeTemplate from "./components/ui/ThemeTemplate";
import About from "./components/pages/About/About";
import Practice from "./components/pages/Practice/Practice";
import FreeConsultation from "./components/pages/FreeConsultation/FreeConsultation";

const RouteLinks = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="about" element={<About />} />
                <Route path="practice" element={<Practice />} />
                <Route path="freeConsultation" element={<FreeConsultation />} />
                <Route path="contact" element={<Contact />} />
                <Route path="themetemplate" element={<ThemeTemplate />} />
            </Routes>
        </>
    );
};

export default RouteLinks;
