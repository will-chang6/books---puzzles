import '../index.css';
import Navbar from './Navbar';
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Navbar /> 
      <div className="App-header">
        <a> Main page </a>
      </div>

      {/* <Routes> 
        <Route exact path='/home' element={null}/>
        <Route exact path='/books' element={null}/>
        <Route exact path='/puzzles' element={null}/>
        <Route exact path='/account' element={null}/>
      </Routes> */}
    </div>
  );
}

export default App;
