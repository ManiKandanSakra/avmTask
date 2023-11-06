import * as React from 'react';
import {Card} from 'react-bootstrap';

function Displays(props) {
  return props.value && (
    <Card className='card-first'>  
    <Card.Body  className='card-body'>  
        <Card.Title className='card-name'>{props.value.title}</Card.Title>  
        <div className='d-flex justify-content-between audioContent'> 
            <div className='d-flex justify-content-between audioH1'><h1>{props.value.value}</h1>
            <span className="divSix">/{props.value.span}</span>
            <div className="vl"></div>
            <div className="dispalyTime"><span>On Time</span> <h3 className="audioH3">{props.value.onTime}</h3></div>
            </div>
        </div>
    </Card.Body>  
</Card>
  )
}

export default Displays