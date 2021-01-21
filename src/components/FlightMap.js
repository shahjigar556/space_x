import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'


export default function FlightMap({flight}) {
   // console.log(flight) 
   const colorStyle={
       'color':flight.launch_success?"Green":"Red"
   }
   const url=`/${flight.flight_number}/${flight.links.youtube_id}`
    return (
    <Grid item xs={4}>
        <Paper elevation={3}>
            <h3 className="text-center mt-3 mb-2">Flight Number:{flight.flight_number}</h3>
            <p>Launch Year:{flight.launch_year}</p>
            <p>{`The Launch Was `} <b style={colorStyle}>{`${flight.launch_success?"Succesful":"Failure"}`}</b></p>
            <center>
            <Link to={url}>
            <Button size="small" className="mb-3 mt-3" variant="contained" color="primary">
               Click
            </Button>
            </Link>
            </center>
        </Paper>
    </Grid>
    )
}
