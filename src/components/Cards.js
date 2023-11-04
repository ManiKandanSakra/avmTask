import React from 'react'
import AirQuality from './AirQuality';
import Temperature from './Temperature';
import Audio from './Audio';
import Displays from './Displays';
import Lighting from './Lighting';

const Cards = () => {
  return (
    <div className="container"> 
        <div className='row'>
            <div className='col-md-4'>
                <AirQuality/>
            </div>
            <div className='col-md-4'>
                <Temperature/>
            </div>
            <div className='col-md-4'>
                <Audio/>
            </div>
        </div>
        <br></br>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <Displays/>
            </div>
            <div className='col-md-4'>
                <Lighting/>
            </div>
        </div>
    </div>
    
  )
}

export default Cards