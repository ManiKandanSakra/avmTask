import * as React from 'react';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import { Container, Card } from 'react-bootstrap';

export default class Lighting extends React.Component {
    render() {
        return (
             <Card className='card-first'>  
                <Card.Body  className='card-body'>  
                    <Card.Title className='card-name'>Lighting</Card.Title>  
                    <div className='d-flex justify-content-between audioContent'> 
                        <div className='d-flex justify-content-between audioH1'><h1>32</h1>
                        <span className="playtext">ON</span>
                        <div className="audioTot"><span>Total</span> <h3 className="audioH3">43</h3></div>
                        </div>
                    </div>
                </Card.Body>  
            </Card> 
        )
    }
}