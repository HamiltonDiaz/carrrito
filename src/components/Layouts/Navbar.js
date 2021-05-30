import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge"
import logo from "../../assets/logo.png"
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useStateValue} from "../../StateProvider"

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
    const [{cesta}, dispatch] =useStateValue();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Link to="/">
                        <IconButton edge="start" className={classes.menuButton} color="inherit">
                            <img src={logo} className={classes.image} alt="Logo" />
                        </IconButton>
                    </Link>
                    <div className={classes.grow} ></div>
                    <Typography variant="h6" color="textPrimary" component="p" >
                        Invitado
                    </Typography>
                    <div className={classes.button}>
                        <Button variant="outlined" >
                            <strong>Sing in</strong>
                        </Button>

                        <Link to="carrito">
                            <IconButton aria-label="Show cart items" color="inherit" >
                                <Badge badgeContent={cesta?.length} color="secondary">
                                    <ShoppingCart fontSize="large" color="primary" />
                                </Badge>                            
                            </IconButton>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
