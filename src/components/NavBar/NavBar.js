import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import colors from "../../utils/color";

const NavBar = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar 
            position="static"
            style= {{backgroundColor : colors.yellow, color: colors.primaryGray}}>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ArchiJoke
            </Typography>
            <Button color="inherit">Top</Button>
            <Button color="inherit">My Jokes</Button>
            <Button color="inherit">Log Out</Button>
        </Toolbar>
        </AppBar>
    </Box>
    );
}

export default NavBar;