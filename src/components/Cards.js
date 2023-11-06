import React, { useState, useEffect } from 'react'
import AirQuality from './AirQuality';
import Temperature from './Temperature';
import Audio from './Audio';
import Displays from './Displays';
import Lighting from './Lighting';

const Cards = () => {

    const [value, setValue] = useState(false);

     const test =(val) =>{
        setValue(val)
    }

    useEffect(() => {
        let dataJson = {
            'AirQuality':{
                'title' : 'Air Quality',
                'value' : 72,
                'high' : 93,
                'low' : 61
            },
            'Temperature':{
                'title' : 'Temperature',
                'celcious' : 21,
                'fire' : 26,
                'snow' : 18
            },
            'Audio':{
                'title' : 'Audio',
                'value' : 2,
                'total' : 5
            },
            'Displays':{
                'title' : 'Displays',
                'value' : 10,
                'span' : 16,
                'onTime' : '00.00'
            },
            'Lighting':{
                'title' : 'Lighting',
                'value' : 32,
                'total' : 43,
            }
        };
        test(dataJson)
    },[])

  return (
    <div className="container" > 
        <div className='row classRow'>
            <div className='col-md-4 colClass'>
                <AirQuality value={value.AirQuality}/>
            </div>
            <div className='col-md-4 colClass'>
                <Temperature value={value.Temperature}/>
            </div>
            <div className='col-md-4 colClass'>
                <Audio value={value.Audio}/>
            </div>
            <div className='col-md-4 colClass'>
                <Displays  value={value.Displays}/>
            </div>
            <div className='col-md-4 colClass'>
                <Lighting value={value.Lighting}/>
            </div>
        </div>
    </div>
    
  )
}

export default Cards