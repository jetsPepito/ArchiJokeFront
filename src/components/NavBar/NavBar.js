import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from "react-router";

import colors from "../../utils/color";
import store from '../../store';

const NavBar = () => {
    const history = useHistory();
    const { dispatch } = store;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
            position="static"
            style={{ backgroundColor : colors.yellow, color: colors.primaryGray }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, cursor: "pointer" }}
                        onClick={() => history.push("/topJokes")}
                    >
                        ArchiJoke
                    </Typography>
                    <Button color="inherit" onClick={() => history.push("/topJokes")}>Top</Button>
                    <Button color="inherit" onClick={() => history.push("/myJokes")}>My Jokes</Button>
                    <Button color="inherit" onClick={() => dispatch.login.logout()}>Log Out</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;