import React from 'react'
import {Route,Switch} from 'react-router-dom'
import './App.css'
import {Link} from 'react-router-dom'
import LandingPage from './components/views/LandingPage'
import Flight from './components/views/Flight'
import Title from './components/Title'
export default function App() {
  
  return (
    <div>
        <Title />
        <Switch>
           <Route exact path='/' component={LandingPage} />
           <Route exact path='/:flight_number/:video_id' component={Flight} />
        </Switch>
    </div>
  )
}
