import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Form from "./components/Form.jsx";
import './App.css';

const App = () => {

  // Blank form to pass to state
  const blankForm = {
    name: "",
    size: "",
    toppings: {
      pepperoni: false,
      peppers: false,
      mushrooms: false,
      sausage: false
    },
    specialRequests: ""
  }

  // When a user types form inputs, this happens
  const handleChange = event => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }

  // When a user checks form boxes, this happens
  const handleCheckbox = event => {
    const { name, checked } = event.target

    setForm(
      {
        ...form,
        toppings: {
          ...form.toppings,
          [name]: checked
        }
      }
    )
  }

  // Slices of state
  const [form, setForm] = useState(blankForm);
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
        <Route path="/pizza">
          <Form
            form={form}
            handleChange={handleChange}
            handleCheckbox={handleCheckbox}
          />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </>
  );
};
export default App;
