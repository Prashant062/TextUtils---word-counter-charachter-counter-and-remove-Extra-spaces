import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') //wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "Success: ");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been enable", "Success: ");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="texutils" about="About" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} mode={mode} />
        {/* <Navbar /> */}
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze my" showAlert={showAlert} mode={mode} />}>
            </Route>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
