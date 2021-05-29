import React from "react";
import accounting from "accounting"
import {
    makeStyles, 
    Card,
    CardHeader,
    CardMedia,
    CardActions,
    IconButton,
    Typography,
    
}from "@material-ui/core"

import DeleteIcon from '@material-ui/icons/Delete';


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
    cardActions:{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
    },
    cardRating:{
        display:"flex",
    },

}));

export default function CheckoutCard({data}) {
    const classes = useStyles();
    

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
        
          
            <CardActions disableSpacing className={classes.cardActions} >
                 <div className={classes.cardRating}>                    
                    <IconButton>
                        {Array(data.rating)
                            .fill()
                            .map((_,i)=>(
                            <p>&#11088;</p>
                        ))}
                    </IconButton>
                </div>
                <IconButton>
                    <DeleteIcon
                        fontSize='large'
                    />
                </IconButton>
              
            </CardActions>
            
        </Card>
    );
}
