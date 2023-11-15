
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Barcharts from './chart/barchart';
import LineChart from './chart/linechart';

function App() {   

    return (
        <div className="App">
             <Nav className="'d-flex justify-content-between" activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/barchart">Bar Chart</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/linechart">Line Chart</Nav.Link>
                </Nav.Item>
            </Nav>
            <Router>
                <Routes>
                    <Route path='/barchart' element={<Barcharts/>} />
                    <Route path='/linechart' element={<LineChart/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;