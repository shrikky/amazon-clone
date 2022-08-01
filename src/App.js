import React from 'react';
import './App.css';
import './Header.js';
import Header from './Header.js';
import Home from './Home';
import Checkout from './Checkout.js';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
