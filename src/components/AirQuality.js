import * as React from 'react';
import {Card} from 'react-bootstrap';  
import FeatherIcon from 'feather-icons-react';

const AirQuality = (props) => {
    return props.value && (
        <Card className='card-first'>  
            <Card.Body className='card-body'>  
                <Card.Title className='card-name'>{props.value.title}</Card.Title> 
                <div className='d-flex justify-content-between airContent'> 
                    <div className='airQualityH1'><h1>{props.value.value}</h1></div>
                    <div className='air-innerFont'> 
                    <span><h5><FeatherIcon icon="arrow-up" className="arrown-up"/>{props.value.high}</h5></span> <hr></hr> 
                    <h5><FeatherIcon icon="arrow-down" className="arrown-down"/>{props.value.low}</h5></div>
                </div>
            </Card.Body>  
        </Card>
    )
}

export default AirQuality
