import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="main">
      <header className="header d-flex justify-content-center text-align-center">
          <img src={logo} alt="logo"/>
      </header>
      <div className='card-section col-lg-8 mx-auto'>
        <Cards/>
      </div>
      {/* <Router>
          <Routes>
            <Route path='/' element={<TestOne/>} />
            <Route path={'/two'} exact element={<TestTwo/>} />
            <Route path={'/three'} exact component={<TestThree/>} />
          </Routes>
      </Router> */}
   </div>
    
  );
}

export default App;
