import React from 'react'
import Countup from 'react-countup'
import {Card, CardContent, Typography , Grid} from '@material-ui/core'
import './cards.css'
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return <Typography>Loading..    </Typography>
    }
    return(
    <div className='card-container'>
         <Grid container spacing={10} justify="center" >
           <Grid item xs={12}  lg={3}>
            <Card >
                <CardContent className='card-inf'>
                    <Typography color='textSecondary' gutterBottom>Infected</Typography>
                    <Typography variant='h5'><Countup start={0} end={confirmed.value} separator={','} duration={0} /></Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} lg={3}>
            <Card >
                <CardContent className='card-rec'>
                    <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                    <Typography variant='h5'><Countup start={0} end={recovered.value} separator={','} duration={0} /></Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of cases recovered from COVID-19</Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} lg={3}>
            <Card >
                <CardContent className='card-dea'>
                    <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                    <Typography variant='h5'><Countup start={0} end={deaths.value} separator={','} duration={0} /></Typography>
                    <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant='body2'>Number of deaths due to COVID-19</Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    </div>
    )
}

export default Cards