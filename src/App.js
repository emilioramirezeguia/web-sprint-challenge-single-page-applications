import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <>
      <nav>
        <h1 className='store-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
      <section className="pizza-section">
        <h2>Your favorite food, delivered while coding</h2>
        <Link to="/pizza">Pizza?</Link>
      </section>

      <Switch>
        <Route></Route>
        <Route path="/"></Route>
      </Switch>
    </>
  );
};
export default App;
