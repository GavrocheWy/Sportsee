// Dependencies
import React from 'react'
import { Routes, Route } from "react-router-dom"
// Components
import Layout from './components/Layout/Layout'
// Pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
