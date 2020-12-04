import { Card, CardContent, CardMedia, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { addProductAction } from './../redux/actions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '10px 50px',
        padding: 10,
        flexWrap: 'wrap',
        width: '90%',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: "800px",
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        marginLeft: 10,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: 400,
        height: 400,
    },
    content2: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    button: {
        margin: '10px 50px',
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

export default function Details() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const item = useSelector(state => state.item);

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
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={item.item.pictures[0]}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography variant="h4" style={{ color: "#5C5E64" }}>
                            {item.item.name}
                        </Typography>
                        <Typography variant="h6" style={{ color: "#772CE8" }}>
                            {item.item.brand}
                        </Typography>
                        <Rating
                            style={{ marginTop: 10, color: "#772CE8" }}
                            name="half-rating"
                            value={(Math.round(item.item.rating))}
                            precision={0.5} readOnly />

                        <strike>
                            <Typography style={{ marginTop: 20, color: "#5C5E64" }} variant="h5" >
                                {formatCurrency("es-CO", "COP", 0, item.item.price + item.item.price * .1)}
                            </Typography>
                        </strike>
                        <Typography style={{ display: 'inline', color: "#772CE8" }} variant="h3" >
                            {formatCurrency("es-CO", "COP", 0, item.item.price)}
                        </Typography>
                        <Typography style={{ margin: 20, color: "#5C5E64", display: 'inline' }} variant="h4" >
                            {(Math.floor((100 - (item.item.price * 100) / (item.item.price + item.item.price * .1)))) + "% OFF"}
                        </Typography>
                        {
                            item.item.seller.logo.includes("http") &&
                            <div class='container'>
                                <a href='#'>
                                    <img class='resize_fit_center'
                                        src={item.item.seller.logo} />
                                </a>
                            </div>
                        }
                        <Typography variant="h5" style={{ marginTop: 20, color: "#5C5E64" }}>
                            {item.item.seller.name}
                        </Typography>
                        <Typography variant="h6" style={{ color: "#5C5E64" }}>
                            {item.item.city.name}
                        </Typography>
                    </CardContent>
                    <div className={classes.content2}>
                        <Button className={classes.button} variant="contained" color="primary"
                            onClick={() => {
                                dispatch(addProductAction(item.item))
                            }}>
                            Agregar al carrito
                        </Button>
                        <Button className={classes.button} variant="contained" color="primary" >
                            Comprar
                        </Button>
                    </div>
                </div>
            </Card>
            <Card className={classes.root}>
                <Typography variant="h6" style={{ color: "#5C5E64" }}>
                    {item.item.description}
                </Typography>
            </Card>
        </>
    )
}