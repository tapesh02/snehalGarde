// @ts-nocheck
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { AiFillHome, AiFillContacts, AiOutlineTeam } from "react-icons/ai";
import { BsFillAwardFill, BsMenuButtonWideFill } from "react-icons/bs";

export default function MobileNav() {
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AiFillHome />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AiOutlineTeam />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AiFillContacts />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BsFillAwardFill />
                        </ListItemIcon>
                        <ListItemText primary="Practice" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <div style={{ width: "100%" }}>
                <Button variant="contained" style={{ width: "100%" }}>
                    Free Consultation
                </Button>
            </div>
        </Box>
    );

    return (
        <div>
            {["top"].map((anchor) => (
                <React.Fragment key={anchor}>
                    <BsMenuButtonWideFill onClick={toggleDrawer(anchor, true)}>{anchor}</BsMenuButtonWideFill>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
