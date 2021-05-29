import React from "react";
import clsx from "clsx";
import {
    makeStyles, 
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
    Typography,
    
}from "@material-ui/core"


import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {AddShoppingCart} from "@material-ui/icons"
import accounting from "accounting"

// http://localhost:5000/static/uploads/guitarra-acustica.jpg

const baseUrlApi= process.env.REACT_APP_BASE_URL_IMG
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    action:{
        marginTop:"1rem",
    },
    media: {
        
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
}));

export default function Product({data}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                 action={
                    <Typography
                        className={classes.action}
                        variant="h6"
                        color="textSecondary"
                    >
                        {accounting.formatMoney(data.precio)}                        
                    </Typography>
                }
                title={data.name}
                subheader="In stock"
            />
            
            <CardMedia
                height="50"
                className={classes.media}                
                image={`${baseUrlApi}/${data.img}`}                
                title={data.name}
            />
        
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Linea: {data.nomlinea}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <AddShoppingCart
                        fontSize='large'
                    />
                </IconButton>

                <IconButton>
                    {Array(data.rating)
                        .fill()
                        .map((_,i)=>(
                        <p>&#11088;</p>
                    ))}
                </IconButton>

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Ver más"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {data.descripcion} 
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
