import React from "react"
import {useState, useEffect} from "react"
import { Button, Form } from 'semantic-ui-react'
import API from "../utils/API.js"
// import FlightResults from "/FlightResults"


const CheapSearch = () => {

      const [depCity, setDepCity] = useState("");
      const [arrCity, setArrCity] = useState("");
      const [price, setPrice] = useState("")
      const [date, setDate] = useState("")

      const handleFormSubmit = event => {
            event.preventDefault();
            API.getFlight(depCity, arrCity)
            .then(res => setPrice(res.data.Quotes[0].minprice))
            .catch(err => console.log(err));
      
      }

      return (
      <>
      <div>
            <br></br>
            <br></br>
            <h3>Please Provide The Following Pieces of Information:</h3> 
            <h4>
                  <ol>
                        <li>Departing Airport Code See Airport Reference Code Dropdown</li>
                        <li>Desired Destination</li>
                        <li>Departure Date</li>

                  </ol>
                  </h4>
            <Form>
              <Form.Group unstackable widths={1}>
                <Form.Input name="depCity" width={5} label='Departing City' placeholder='City You Will Be Leaving From' />
                <Form.Input name="arrCity" width={5} label='Destination City' placeholder='City You Will Be Flying To' />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input name="date" width={5} type="date" label='Departure Date' />
              </Form.Group>
              
              <Button type='submit'>Calculate Expected Cost</Button>
            </Form>


      </div>
</>
          )
}
// state = { 
//       author:"",
//       body:"",
//       price: Number,
//       depCity: "",
//       arrCity: "",
//       date: ""
//   }
  

export default CheapSearch;