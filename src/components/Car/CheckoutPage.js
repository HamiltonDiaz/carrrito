import React from "react";
import { makeStyles,Grid, Typography } from '@material-ui/core'
import {useStateValue} from "../../StateProvider"
import CheckoutCard from "./CheckoutCard";
import Total from "./Total"


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: "2rem",
        
    },
}));

const CheckoutPage =() =>{
    const classes = useStyles();    
    const [{cesta}, dispatch] =useStateValue();

    function FormRow(){
        return(
            <React.Fragment>
                {
                    cesta?.map((item)=>(
                            <Grid xs={12} sm={8} md={6} lg={4} >
                                <CheckoutCard key={item.id} data={item}/>
                            </Grid>
                        )
                    )
                }
            </React.Fragment>
        );
    }
    
    return(
        <div className={classes.root} align='center' >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Carrito
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2} >
                    <FormRow/>
                </Grid>
                <Grid item xs={12} sm={4} md={3} >
                    <Typography align='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckoutPage