import React, { useState, useEffect } from "react"
import { Button, Form } from 'semantic-ui-react'
// import FlightResults from "/FlightResults"

// import API from "../utils/API"

const CheapSearch = () => {
      const [author, setAuthor] = useState("")
      const [body, setBody] = useState("")
      const [price, setPrice] = useState(Number)
      const [depCity, setDepCity] = useState("")
      const [arrCity, setArrCity] = useState("")
      const [date, setDate] = useState(Number)
      const [data, setData] = useState({ //min price?? 
      })

      useEffect(() => {

      }, [])

      const handleInputChange = event => {
            setDepCity(event.target.value)
            setArrCity(event.target.value)
            setDate(event.target.value)
      }


      const handleFormSubmit = event => {
            event.preventDefault()


      }
      return (
            <div>
                  <br></br>
                  <br></br>
                  <h3>Please Provide The Following Pieces of Information:</h3>
                  <h4>
                        <ol>
                              <li>Departing City</li>
                              <li>Desired Destination</li>
                              <li>Departure Date</li>

                        </ol>
                  </h4>
                  <Form>
                        <Form.Group unstackable widths={1}>
                              <Form.Input name="depCity" width={5} label='Departing City' placeholder='City You Will Be Leaving From' onChange={handleInputChange} />
                              <Form.Input name="arrCity" width={5} label='Destination City' placeholder='City You Will Be Flying To' />
                        </Form.Group>
                        <Form.Group widths={2}>
                              <Form.Input name="date" width={5} type="date" label='Departure Date' />
                        </Form.Group>

                        <Button type='submit' onClick={handleFormSubmit}>Calculate Expected Cost</Button>
                  </Form>


            </div>
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