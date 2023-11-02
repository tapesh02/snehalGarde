import React, { useEffect, useState } from "react";

import "./home.scss";
import { Typography } from "@mui/material";

const Home = () => {
    return (
        <>
            <div className="homeBg">
                <div className="homeBg2"></div>
            </div>
            <div className="header">
                <Typography variant="h6">Committed to Helping Our Clients Succeed</Typography>
                <Typography variant="h3">
                    You Need a Reliable Law Firm That Helps Deal with Your Family Matters
                </Typography>
            </div>
        </>
    );
};

export default Home;
