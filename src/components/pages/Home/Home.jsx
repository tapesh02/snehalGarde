import React, { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Typography } from "@mui/material";

const Home = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <div className="homeBg">
                <div className="homeBg2"></div>
            </div>
            <div className={`header ${isMobile && "mobileheader"}`}>
                <Typography variant="h6" className={`${isMobile && "mobileh6"}`}>
                    Committed to Helping Our Clients Succeed
                </Typography>
                <Typography variant="h3" className={`${isMobile && "mobileh3"}`}>
                    You Need a Reliable Law Firm That Helps Deal with Your Family Matters
                </Typography>
            </div>
        </>
    );
};

export default Home;
