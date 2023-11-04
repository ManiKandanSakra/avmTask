import * as React from 'react';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import {Container ,Card} from 'react-bootstrap';  

export default class Displays extends React.Component {
    render() {
        return (
            <Container>
            <Card className='card-first'>  
                <Card.Body  className='card-body'>  
                    <Card.Title className='card-name'>Displays</Card.Title>  
                    <div className='d-flex justify-content-between audioContent'> 
                        <div className='d-flex justify-content-between audioH1'><h1>10</h1>
                        <span className="divSix">/16</span>
                        <div class="vl"></div>
                        <div className="dispalyTime"><span>On Time</span> <h3 className="audioH3">00:00</h3></div>
                        </div>
                    </div>
                </Card.Body>  
            </Card> 
            </Container> 
        )
    }
}