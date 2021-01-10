import React from 'react'
import {Route,Switch} from 'react-router-dom'

import {Link} from 'react-router-dom'
import LandingPage from './components/views/LandingPage'
import Flight from './components/views/Flight'

export default function App() {
  return (
    <div>
        <Switch>
           <Route exact path='/' component={LandingPage} />
           <Route exact path='/:flight_number' component={Flight} />

        </Switch>
    </div>
  )
}
