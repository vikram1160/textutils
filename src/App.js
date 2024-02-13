import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navabar from "./components/Navabar";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import  React, { useState } from "react";

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    } 
  }
  return (
    <>
      <BrowserRouter>
      <Navabar  mode={mode} toggleMode={toggleMode}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about"  element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
