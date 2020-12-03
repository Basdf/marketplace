import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        width: 208,
        height: 386,
        margin: 25,
        textAlign: "center",
        background: "#F7F7F7",
        borderRadius: 8,
    },
    media: {
        
        height: 245,
    },
    button: {
        textTransform: "none", 
        borderRadius: 31, 
        background: "#772CE8",
        width: 166,
        height: 28,
    },  
}));

export default function List() {
    const classes = useStyles();
    var array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    function formatCurrency(locales, currency, fractionDigits, number) {
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);
        return formatted;
    }

    return (
        <>
            <div style={{ display: "flex", flexFlow: "row wrap" }}>
                {
                    array.map(() => {
                        return (<Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png"
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Producto
                         </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    Marca
                        </Typography>

                                <Typography variant="body2" color="textSecondary" component="p">
                                    <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between"}}>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        {formatCurrency("es-CO", "COP", 0, 35000000)}
                                            
                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        {formatCurrency("es-CO", "COP", 0, 35000000)}
                        </Typography>
                                    </div>
                                </Typography>


                            </CardContent>

                            <Button className={classes.button} variant="contained" color="primary">
                                Agregar al carrito
                        </Button>

                        </Card>)
                    })
                }
            </div>
        </>

    );
}