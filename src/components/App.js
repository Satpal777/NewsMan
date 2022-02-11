import React, { useState, useEffect } from 'react'
import '../styles/App.css';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar';
import Container from './Container';



function App() {
  var root = document.getElementById("root");

  const [mode, setMode] = useState("light");
  const [icon, seticon] = useState({
    iconcolor: "#ffeb3b",
    iconclass: "bi-emoji-sunglasses-fill"
  })
  root.style.background = mode == "light" ? "#ffffff" : "#000000";
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      seticon({
        iconcolor: "#000000",
        iconclass: "bi-cloud-moon-fill"
      });
    }
    else {
      setMode('light');
      seticon({
        iconcolor: "#ffeb3b",
        iconclass: "bi-emoji-sunglasses-fill"
      });
    }
  };

  return (

    <>
      <Router>
        <Navbar theme={toggleMode} mode={mode} icon={icon} />
        <Routes>
          <Route path="/" element={<Container key="general" mode={mode} icon={icon} country={"in"} category={"general"} />} />
          <Route path="technology" element={<Container key="technology" mode={mode} icon={icon} country={"in"} category={"technology"} />} />
          <Route path="science" element={<Container key="science" mode={mode} icon={icon} country={"in"} category={"science"} />} />
          <Route path="sports" element={<Container key="sports" mode={mode} icon={icon} country={"in"} category={"sports"} />} />
          <Route path="entertainment" element={<Container key="entertainment" mode={mode} icon={icon} country={"in"} category={"entertainment"} />} />
        </Routes>
      </Router>
    </>
  );
}
App.defaultProps = {
  country: "in",
  category: "general",
  mode: "light",
  icon: "bi-emoji-sunglasses-fill"
}
App.prototypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  mode: PropTypes.string,
  icon: PropTypes.string
}

export default App;
