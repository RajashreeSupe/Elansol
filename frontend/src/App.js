import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Display from './components/Display';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/newUser" element={<Signup />} />
          <Route path='/display' element={<Display/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
