import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'

// import { } from "@chakra-ui/react"

import NavRouter from "./components/NavRouter";
// import Layout from "./components/Layout";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <NavRouter />
    </Router>
  );
}

export default App;
