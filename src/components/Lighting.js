import * as React from 'react';
import { Card } from 'react-bootstrap';

function Lighting(props) {
        return props.value && (
             <Card className='card-first'>  
                <Card.Body  className='card-body'>  
                    <Card.Title className='card-name'>{props.value.title}</Card.Title>  
                    <div className='d-flex justify-content-between audioContent'> 
                        <div className='d-flex justify-content-between audioH1'><h1>{props.value.value}</h1>
                        <span className="playtext">ON</span>
                        <div className="audioTot"><span>Total</span> <h3 className="audioH3">{props.value.total}</h3></div>
                        </div>
                    </div>
                </Card.Body>  
            </Card> 
        )
}

export default Lighting