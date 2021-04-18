import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge"
import logo from "../assets/logo.png"
import { ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom:"7rem",
    },
    appBar:{
        backgroundColor:"whitesmoke",
        boxShadow:"none",
    },
    grow:{
        flexGrow:1,
    },
    button: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        
    },
    image:{
        marginRight:"10px",
        height:"2rem",
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <img src={logo} className={classes.image} alt="Logo" />
                    </IconButton>
                    <div className={classes.grow} ></div>
                    <Typography variant="h6" color="textPrimary" component="p" >
                        Invitado
                    </Typography>
                    <div className={classes.button}>
                        <Button variant="outlined" >
                            <strong>Sing in</strong>
                        </Button>
                        <IconButton aria-label="Show cart items" color="inherit" >
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart fontSize="large" color="primary" />
                            </Badge>                            
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
