import React, { useState, useEffect } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Form from "./components/Form.jsx";
import orderSchema from "./validation/orderSchema.js";
import * as Yup from "yup";
import './App.css';

// Blank form to pass to state
const blankForm = {
  name: "",
  size: "",
  toppings: {
    pepperoni: false,
    peppers: false,
    mushrooms: false,
    sausage: false,
  },
  specialRequests: ""
}

// Blank form errors
const blankErrors = {
  name: ""
}

// Button initially enabled
const buttonDisabled = true;

const App = () => {
  // Slices of state
  const [form, setForm] = useState(blankForm);
  const [orderErrors, setOrderErrors] = useState(blankErrors)
  const [disableButton, setDisableButton] = useState(buttonDisabled);

  // When a user types form inputs, this happens
  const handleChange = event => {
    const { name, value } = event.target;

    // Yup validations
    Yup.reach(orderSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then((valid) => {
        setOrderErrors({
          ...orderErrors,
          [name]: "",
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message
        returned from yup (that we created in our schema) */
      .catch((err) => {
        setOrderErrors({
          ...orderErrors,
          [name]: err.errors[0],
        });
      });

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
          [name]: checked,
        }
      }
    );
  }

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/users", newOrder)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error", error);
      })
      .finally(() => {
        setForm(blankForm);
      })
  }

  const handleSubmit = event => {
    event.preventDefault()

    const newOrder = {
      name: form.name.trim(),
      size: form.size,
      specialRequests: form.specialRequests,
      toppings: Object.keys(form.toppings).filter(topping => form.toppings[topping]),
    };
    postNewOrder(newOrder);
  }

  useEffect(() => {
    orderSchema.isValid(form).then((valid) => {
      setDisableButton(!valid);
    });
  }, [form]);

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
            handleSubmit={handleSubmit}
            disabled={disableButton}
            errors={orderErrors}
          />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </>
  );
};
export default App;
