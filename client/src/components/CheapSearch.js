import React, { useState } from "react"
import { Button, Form, Select } from 'semantic-ui-react'

import API from "../utils/Api"

// import FlightResults from "/FlightResults"


const CheapSearch = () => {

      const [depCity, setDepCity] = useState("");
      const [arrCity, setArrCity] = useState("");
      const [price, setPrice] = useState("")
      const [date, setDate] = useState("")


      // const state = { 

      //             price: Number,
      //             depCity: "",
      //             arrCity: "",
      //             date: ""
      //         }






      const handleFormSubmit = (event) => {
            event.preventDefault();
            API.getFlight(depCity, arrCity, date).then(data => console.log(data))
                  // .then(res => setPrice(res.data.Quotes[0].minprice))
                  .catch(err => console.log(err));

      }


      const handleInputChange = (event, data) => {

            setDepCity(data.value)


      }

      const handleInputChange2 = (event, data) => {


            setArrCity(data.value)



      }

      const handleInputChange3 = (event, data) => {

            setDate(data.value)


      }




      const cityOptions = [
            { key: '1', text: 'Atlanta, GA', value: 'ATL-sky' },
            { key: '2', text: 'Los Angeles, CA', value: 'LAX-sky' },
            { key: '3', text: 'Chicago, IL', value: 'ORD-sky' },
            { key: '4', text: 'Dallas, TX', value: 'DFW-sky' },
            { key: '5', text: 'Denver, CO', value: 'DIA-sky' },
            { key: '6', text: 'New York City, NY', value: 'JFK-sky' },
            { key: '7', text: 'San Francisco, CA', value: 'SFO-sky' },
            { key: '8', text: 'Seattle, WA', value: 'SEA-sky' },
            { key: '9', text: 'Las Vegas, NV', value: 'LAS-sky' },
            { key: '10', text: 'Orlando, FL', value: 'MCO-sky' },
            { key: '11', text: 'Newark, NJ', value: 'EWR-sky' },
            { key: '12', text: 'Charlotte, NC', value: 'CLT-sky' },
            { key: '13', text: 'PHOENIX, AZ', value: 'PHX-sky' },
            { key: '14', text: 'Houston, TX', value: 'IAH-sky' },
            { key: '15', text: 'Miami, FL', value: 'MIA-sky' },
            { key: '16', text: 'Boston, MA', value: 'BOS-sky' },
            { key: '17', text: 'Minneapolis, MN', value: 'MSP-sky' },
            { key: '18', text: 'Fort Lauderdale, FL', value: 'FLL-sky' },
            { key: '19', text: 'Detroit, MI', value: 'DTW-sky' },
            { key: '20', text: 'Philadelphia, PA', value: 'PHL-sky' },
            { key: '21', text: 'Baltimore, MD', value: 'BWI-sky' },
            { key: '22', text: 'Salt Lake City, UT', value: 'SLC-sky' },
            { key: '23', text: 'San Diego, CA', value: 'SAN-sky' },
            { key: '24', text: 'Washington D.C', value: 'IAD-sky' },
            { key: '25', text: 'Tampa, Florida', value: 'TPA-sky' },
            { key: '26', text: 'Portland, OR', value: 'PDX-sky' },
            { key: '27', text: 'Honolulu, HI', value: 'HNL-sky' },

      ]
      console.log("departure city", depCity)
      console.log("arrival city", arrCity)
      console.log("Date selected:", date)




      console.log("departure city", depCity)
      console.log("arrivial city", arrCity)


      // }
      return (
            <div className="containerHome">
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
                                    <Form.Select className="depCity" options={cityOptions} name="depCity" width={5} label='Departing City' placeholder='City You Will Be Leaving From' onChange={handleInputChange} />


                                    <Form.Select options={cityOptions} name="arrCity" width={5} label='Destination City' placeholder='City You Will Be Flying To' onChange={handleInputChange2} />
                              </Form.Group>
                              <Form.Group widths={2}>
                                    <Form.Input name="date" width={5} type="date" label='Departure Date' onChange={handleInputChange3} />
                              </Form.Group>

                              <Button type='submit' onClick={handleFormSubmit}>Calculate Expected Cost</Button>
                        </Form>


                  </div>
                  {/* <div>
                        <p> PRICE?: {price}</p>
                  </div> */}
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