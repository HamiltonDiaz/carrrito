import React from "react";
import { actionTypes } from "../../reducer";
import {useStateValue} from "../../StateProvider"
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
    const {id, name, nomlinea, img, precio, rating, descripcion, lineasid, cantidad} = data 
    const classes = useStyles();
    const [{cesta}, dispatch] =useStateValue();


    const removeItem=()=>{
        dispatch(
            {
                type: actionTypes.REMOVE_ITEM,
                id,
            }
        )
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                 action={
                    <Typography
                        className={classes.action}
                        variant="h6"
                        color="textSecondary"
                    >
                        {accounting.formatMoney(precio)}                        
                    </Typography>
                }
                title={name}
                subheader="In stock"
            />
            
            <CardMedia
                height="50"
                className={classes.media}                
                image={`${baseUrlApi}/${img}`}                
                title={name}
            />
        
          
            <CardActions disableSpacing className={classes.cardActions} >
                 <div className={classes.cardRating}>                    
                    <IconButton>
                        {Array(rating)
                            .fill()
                            .map((_,i)=>(
                            <p key={i} >&#11088;</p>
                        ))}
                    </IconButton>
                </div>
                <IconButton onClick={removeItem} >
                    <DeleteIcon
                        fontSize='large'
                    />
                </IconButton>
              
            </CardActions>
            
        </Card>
    );
}
