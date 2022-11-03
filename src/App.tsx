import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import ErrorBoundary from './error-boundries/ErrorBoundry';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
