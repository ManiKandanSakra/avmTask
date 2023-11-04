import * as React from 'react'
import {Container ,Card} from 'react-bootstrap';  
import fire from '../fire.svg';
import snowflake from '../snowflake.svg';

export default class Temperature extends React.Component {
    render() {
        return (
             <Container>  
                    <Card className='card-first'>  
                        <Card.Body className='card-body'>  
                            <Card.Title className='card-name'>Temperature</Card.Title> 
                            <div className='d-flex justify-content-between tempContent'> 
                                <div className='tempeH1'><h1>21 <span className='celcious'>°C</span></h1></div>
                                <div className='temp-innerFont'> 
                                <span><h5><img src={fire} className='fire-icon'/>26 <span className='content-celcious'>°C</span></h5></span> <hr></hr> 
                                <h5><img src={snowflake} className='fire-icon'/>18 <span className='content-celcious'>°C</span></h5></div>
                            </div>
                        </Card.Body>  
                    </Card> 
            </Container> 
        )
    }
}