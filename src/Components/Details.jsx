import { Card, CardContent, makeStyles, Typography, Button } from '@material-ui/core';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { useSelector } from 'react-redux';
import { actionAddProduct, actionBuyProduct } from './../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { useState } from 'react';



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
    const item = useSelector(state => state.item);
    function formatCurrency(locales, currency, fractionDigits, number) {
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);
        return formatted;
    }

    //carousel
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === item.item.pictures.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? item.item.pictures.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = item.item.pictures.map((URL) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={URL}>
                <img src={URL} alt="" width="300px" height="300px"
                    style={{
                        objectFit: "contain",
                        objectPosition: "center center"
                    }}
                />
                <CarouselCaption captionText="" captionHeader="" />
            </CarouselItem>
        );
    });

    return (
        <>

            <Card className={classes.root}>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    interval={null}
                    slide={false}
                >
                    <CarouselIndicators items={item.item.pictures} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
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
                            <div className='container'>
                                <img className='resize_fit_center'
                                    src={item.item.seller.logo} alt="" />
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
                                actionAddProduct(item.item)
                            }}>
                            Agregar al carrito
                    </Button>
                        <Button className={classes.button} variant="contained" color="primary"
                            onClick={() => {
                                actionBuyProduct(item.item)
                            }}>
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
