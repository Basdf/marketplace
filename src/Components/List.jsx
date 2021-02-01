import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { addProductAction, fetchItemAction } from './../redux/actions';
import { useSelector, useDispatch } from 'react-redux';




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
    const dispatch = useDispatch();
    const classes = useStyles();
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
        <>
            {
                seeker.search !== '' &&
                <div style={{ display: "flex", flexFlow: "row wrap" }}>
                    {
                        seeker.search.map((shop) => {
                            return (
                                shop.items.map((item) => {
                                    return (

                                        <Card key={item.id} className={classes.root}>
                                            <CardMedia
                                                className={classes.media}
                                                image={item.thumbnail}
                                                onClick={() => {
                                                    dispatch(fetchItemAction(item.id, shop.seller.name))
                                                }}
                                            />
                                            <CardContent onClick={() => {
                                                dispatch(fetchItemAction(item.id, shop.seller.name))
                                            }}>
                                                <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#3B3B3B", height: 60 }}>
                                                    {item.name}
                                                </Typography>

                                                <Rating
                                                    style={{ marginTop: 10, color: '#772CE8' }}
                                                    name="half-rating"
                                                    value={(Math.round(item.rating))}
                                                    precision={0.5} readOnly />

                                                <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#772CE8" }}>
                                                    {item.brand}
                                                </Typography>

                                                <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
                                                    <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#3B3B3B", fontWeight: "bold" }}>
                                                        {item.city.name}
                                                    </Typography>

                                                    <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#3B3B3B", fontWeight: "bold" }}>
                                                        {shop.seller.name}
                                                    </Typography>
                                                </div>

                                                <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
                                                    <strike>
                                                        <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#3B3B3B" }}>
                                                            {formatCurrency("es-CO", "COP", 0, (item.price + item.price * .1))}
                                                        </Typography>
                                                    </strike>

                                                    <Typography variant="body2" color="textSecondary" component="p" style={{ color: "#772CE8", fontWeight: "bold" }}>
                                                        {formatCurrency("es-CO", "COP", 0, item.price)}
                                                    </Typography>
                                                </div>
                                            </CardContent>
                                            <Button className={classes.button} variant="contained" color="primary"
                                                onClick={() => {
                                                    item.seller = shop.seller
                                                    dispatch(addProductAction(item))
                                                }}>
                                                Agregar al carrito
                                            </Button>
                                        </Card>
                                    )
                                })
                            )
                        })
                    }
                </div>
            }
        </>
    );
}