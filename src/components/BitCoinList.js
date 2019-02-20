import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import BitCoin from "./BitCoin";

const API_ADDRESS = 'https://api.coinmarketcap.com/v1/ticker/'

class BitCoinList extends Component {
    state = {
        coins: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getCourses()
    }
    getCourses = () => {
        fetch(API_ADDRESS)
            .then(response => response.json())
            .then(data => this.setState({coins: data}));
            console.log(this.state.coins);
    }

    render() {
        return (
            <div>
                { this.state.coins ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 24}}>
                            { this.state.coins.map(currentCoin => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <BitCoin coin={currentCoin} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No courses found" }
            </div>
        )
    }
}
export default BitCoinList;