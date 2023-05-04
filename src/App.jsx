// Styles
import './styles/main.css';
// Dependencies
import React from 'react'
import { Routes, Route } from "react-router-dom"
// Components
import Layout from './components/Layouts/Layout'
// Pages
import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import NotFoundPage from './pages/NotFoundPage'
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <React.Fragment>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Layout />} >/
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<ProfilPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
