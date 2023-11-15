import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';

function App() {
  return (

    <div className="main">
      <header className="header d-flex justify-content-center text-align-center">
          <img src={logo} alt="logo"/>
      </header>
      <div className='card-section col-lg-8 mx-auto'>
        <Cards/>
      </div>
   </div>
  );
}

export default App;
