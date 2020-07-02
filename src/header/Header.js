import React from 'react';
import Search from '../search/Search';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Search bugs
                </Typography>
            </Toolbar>
            <Search/>
        </AppBar>
    );
}

export default Header;
