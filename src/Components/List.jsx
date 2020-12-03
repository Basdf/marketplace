import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useDispatch } from 'react-redux';
import { addProductAction } from './../redux/actions';
import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    root: {
        width: 208,
        height: 486,
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
        "&:hover": {
            background: "#772CE8",
            boxShadow: "none"
        },
    },
}));

export default function List() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const seeker = useSelector(state => state.search);

    function formatCurrency(locales, currency, fractionDigits, number) {
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);
        return formatted;
    }

    return (
        <div style={{ display: "flex", flexFlow: "row wrap" }}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image="http://mco-s1-p.mlstatic.com/696670-MCO42114671332_062020-O.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#3B3B3B" }}>
                        celular xiaomi redmi note 9 pro 128gb/6 ram / 64mp + forro
                         </Typography>

                    <Rating
                        style={{ marginTop: 10, color: '#772CE8' }}
                        name="half-rating"
                        value={(Math.round(4.2))}
                        precision={0.5} readOnly />

                    <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#772CE8" }}>
                        xiaomi
                         </Typography>

                    <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#3B3B3B", fontWeight: "bold" }}>
                            Medellin
                             </Typography>

                        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#3B3B3B", fontWeight: "bold" }}>
                            BlackStore
                             </Typography>
                    </div>

                    <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
                        <strike>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#3B3B3B" }}>
                                {formatCurrency("es-CO", "COP", 0, 35000000)}
                            </Typography>
                        </strike>

                        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#772CE8", fontWeight: "bold" }}>
                            {formatCurrency("es-CO", "COP", 0, 35000000)}
                        </Typography>
                    </div>
                </CardContent>
                <Button className={classes.button} variant="contained" color="primary" onClick={() => { dispatch(addProductAction("hola soy el objeto del carro :V")) }}>
                    Agregar al carrito
                     </Button>
            </Card>
        </div>
    );
}