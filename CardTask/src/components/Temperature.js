import * as React from 'react'
import {Card} from 'react-bootstrap';  
import fire from '../fire.svg';
import snowflake from '../snowflake.svg';

function Temperature(props) {
          return props.value && (
            <Card className='card-first'>  
                <Card.Body className='card-body'>  
                    <Card.Title className='card-name'>{props.value.title}</Card.Title> 
                    <div className='d-flex justify-content-between tempContent'> 
                        <div className='tempeH1'><h1>{props.value.celcious} <span className='celcious'>°C</span></h1></div>
                        <div className='temp-innerFont'> 
                        <span><h5><img src={fire} className='fire-icon' alt="fire"/>{props.value.fire} <span className='content-celcious'>°C</span></h5></span> <hr></hr> 
                        <h5><img src={snowflake} className='fire-icon' alt="snowflake"/>{props.value.snow} <span className='content-celcious'>°C</span></h5></div>
                    </div>
                </Card.Body>  
            </Card> 
        )
}

export default Temperature