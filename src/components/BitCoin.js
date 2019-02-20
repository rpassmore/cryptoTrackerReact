import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const BitCoin = (props) => {
    console.log(props)
    return(
        <div>
            { props.coin ? (
                <Card >
                    <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                               image={process.env.PUBLIC_URL + './coinSymbols/' + props.coin.symbol + ".svg"}
                               title={props.coin.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.coin.name}
                        </Typography>
                        <Typography component="p">
                            {props.coin.symbol}
                        </Typography>
                        <Typography component="p">
                            $ {props.coin.price_usd}
                        </Typography>
                        <Typography component="p">
                            BTC {props.coin.price_btc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" target="_blank">
                            Buy
                        </Button>
                        <Button size="small" color="secondary" target="_blank">
                            Sell
                        </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default BitCoin
