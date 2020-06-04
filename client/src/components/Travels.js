import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import API from "../utils/travelAPI";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Travels() {

  const [travels, setTravel, loadTravel] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Travel and store them with setTravel
  useEffect(() => {
    loadTravels()
  }, [])

  // Loads all Travel and sets them to Travel
  function loadTravels() {
    API.getTravel()
      .then(res =>
        setTravel(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads Travel from the db
  function deleteTravel(id) {
    API.deleteTravel(id)
      .then(res => loadTravels())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.author && formObject.arrCity) {
      API.saveTravel({
        author: formObject.author,
        depCity: formObject.depCity,
        arrCity: formObject.arrCity,
        price: formObject.price,
        body: formObject.body
      })
        .then(res => loadTravels())
        .catch(err => console.log(err));
    }
  };

  return (
    <Form>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Name' placeholder='Name' onChange={handleInputChange}
          name="author" />
        <Form.Input fluid label='Departing City' placeholder='Departing City' onChange={handleInputChange}
          name="depCity" />
        <Form.Input fluid label='Arriving City' placeholder='Arriving City' onChange={handleInputChange}
          name="arrCity" />
        <Form.Input type="number" fluid label='Flight Price' placeholder='Flight Price USD' onChange={handleInputChange}
          name="price" />
      </Form.Group>
      <Form.TextArea label='About' placeholder='Tell us more about your trip' onChange={handleInputChange}
        name="body" />
      <Form.Button
        onClick={handleFormSubmit}
      >Submit</Form.Button>
    </Form>
  )
}


export default Travels;