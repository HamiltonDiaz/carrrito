import React, { useEffect, useState } from "react";
import Product from "./Product";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import { getRequest } from "../../Utils/Api";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));

const baseUrlApi= process.env.REACT_APP_BASE_URL

export default function Products() {
    const classes = useStyles();
    const [datos, setDatos] = useState([]);
    useEffect(() => {        
        getRequest(`${baseUrlApi}/products`, async (res) => {
            setDatos(res.data);
        });
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {
                    datos.map((product) => (                        
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}  >
                            <Product key={product.id} product={product} />
                        </Grid>
                    ))
                }
            </Grid>

        </div>
    );
}
