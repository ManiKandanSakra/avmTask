import * as React from 'react';
import {Card} from 'react-bootstrap';  
import FeatherIcon from 'feather-icons-react';

export default class AirQuality extends React.Component {
    render() {
        return (
            <Card className='card-first'>  
                <Card.Body className='card-body'>  
                    <Card.Title className='card-name'>Air Quality</Card.Title> 
                    {/* <Card.Text>  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
                    </Card.Text>   */}
                    <div className='d-flex justify-content-between airContent'> 
                        <div className='airQualityH1'><h1>72</h1></div>
                        <div className='air-innerFont'> 
                        <span><h5><FeatherIcon icon="arrow-up" className="arrown-up"/>93</h5></span> <hr></hr> 
                        <h5><FeatherIcon icon="arrow-down" className="arrown-down"/>61</h5></div>
                    </div>
                </Card.Body>  
            </Card>
        )
    }
}