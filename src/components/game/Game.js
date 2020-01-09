import React from 'react'
import Map from "../map/Map";
import Direction from "../direction/Direction";

function Game() {
    return (
        <div style={{
            position: 'relative',
            width: '1100px',
            height: '630px',
            margin: '20px auto',
            display: 'flex',
        }}>
            <Map/>
            <Direction/>
        </div>
    )
}

export default Game