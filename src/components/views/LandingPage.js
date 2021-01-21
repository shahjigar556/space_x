import axios from 'axios'
import React from 'react'
import {useState,useEffect} from 'react'
import FlightMap from '../FlightMap'
import Grid from '@material-ui/core/Grid';

function LandingPage(props) {
    const [flights,setFlights]=useState([])

    // useEffect will be invoked when the component will render
    useEffect(()=>{

        const sendGetRequest=async ()=>{
           try{
              const resp=await axios.get('https://api.spacexdata.com/v3/launches?limit=20')
              console.log(resp.data)
              setFlights(resp.data)    // setting the data
           }catch{
              console.log('an error occured')
           }
        }
        
        sendGetRequest()
       },[])

    
    return (
      <div>
         <Grid container spacing={4}>
                {flights.map(f=><FlightMap  flight={f} key={f.flight_number}/>)}
         </Grid>
      </div>
    )
}

export default LandingPage
