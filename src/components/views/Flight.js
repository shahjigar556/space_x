import React from 'react'

function Flight(props) {
    const flight_number=props.match.params.flight_number   // extracting Flight Number
    return (
        <div>
            <h1>Individual Flight Number:{flight_number}</h1>
        </div>
    )
}

export default Flight
