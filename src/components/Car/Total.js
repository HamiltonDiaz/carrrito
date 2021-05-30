import React from 'react'
import accounting from "accounting"
import { Button, makeStyles } from '@material-ui/core'
import {useStateValue} from "../../StateProvider"
import { getPrecioTotal} from "../../reducer";


const useStyles= makeStyles((theme)=>(
    {
        root:{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"20vh",
        },
        button:{
            marginTop:"2rem",
        }

    }
))


const Total = () => {
    const classes = useStyles();
    const [{cesta}, dispatch] =useStateValue();

    return (
        <div className={classes.root}>
            <h5>Total items: {cesta?.length}</h5>            
            <h5>{accounting.formatMoney(getPrecioTotal(cesta))} </h5>
            <Button className={classes.button} variant="contained" color="secondary" >Finalizar Compra</Button>
        </div>
    )
}

export default Total