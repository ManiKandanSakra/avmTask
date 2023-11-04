import * as React from 'react'
import {Container ,Card} from 'react-bootstrap';  

export default class Audio extends React.Component {
    render() {
        return (
            <Container>
            <Card className='card-first'>  
                <Card.Body  className='card-body'>  
                    <Card.Title className='card-name'>Audio</Card.Title>  
                    <div className='d-flex justify-content-between audioContent'> 
                        <div className='d-flex justify-content-between audioH1'><h1>2</h1>
                        <span className="playtext">PLAYING</span>
                        <div className="audioTot"><span>Total</span> <h3 className="audioH3">5</h3></div>
                        </div>
                    </div>
                </Card.Body>  
            </Card> 
            </Container>
        )
    }
}