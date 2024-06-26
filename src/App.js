import React from 'react';
import'./App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contect from './Components/Contect';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Row>
        
        <Router>
        <Col sm={2} className='menu'><Header/></Col>
        <Col sm={10} className='menu1'>
        <Routes>
           <Route path='/'exact Component={Home}/> 
        <Route path='/About' exact Component={About}/>
           <Route path='/Services' exact Component={Services}/>
           <Route path='/Contect' exact Component={Contect}/>
      </Routes>
       </Col>
       </Router>
      </Row>
    </div>
  );
}

export default App;