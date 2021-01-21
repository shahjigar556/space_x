import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import YouTube from 'react-youtube'
function Flight(props) {
    const flight_number=props.match.params.flight_number   // extracting Flight Number
    const [flight,setFlight]=useState({})
    const video_id=props.match.params.video_id;
    const url=`https://api.spacexdata.com/v3/launches/${flight_number}`
    useEffect(()=>{
       const sendGetRequest=async()=>{
          try{
              const resp=await axios.get(url)
              setFlight(resp.data)

          }catch(ex){
              console.log(ex.message)
          }
       }
       sendGetRequest()
    },[])
    console.log(flight)
    //const YT_Link=flight.links.video_link
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    return (
        <div className='container'>
            <div className="row">
                <div  className="col-md-4 col-xs-12 col-sm-6">
                  <YouTube videoId={video_id} opts={opts} onReady={(e)=>_onReady(e)} />
                </div>
            </div>

        </div>
    )
}

export default Flight
