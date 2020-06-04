import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import Card from "./Card"
import API from "../utils/Api"


const JournalForm = (props) => {
   const[userData, setUserData] = useState({
    name: "",
    date: Date.now(),
    body: "",
    depCity: "",
    arrCity: "",
    price: Number,

})
// const [name, setName] = useState()
// const {name, date, body, depCity, arrCity, price} = userData;

const handleSubmit = e => {
// e.preventDefault()
// API.post({
//   author:
// })

}

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserData(previousState => ({...previousState, [name]:value})
  )}
 
  

  // {e=> setUserData(...userData, {name:e.target.value})}
    // const { value } = this.state
    return (
     <> 
      <Form >
        <Form.Group widths='equal'>
          <Form.Input 
           fluid label='Name' placeholder='Name' defaultValue={userData.name} name="name"
           onChange={handleChange}/>
          <Form.Input fluid label='Departing City' name="depCity" defaultValue={userData.depCity} placeholder='Departing City'
          onChange={handleChange} />
         <Form.Input fluid label='Arriving City' name="arrCity" defaultValue={userData.arrCity} placeholder='Arriving City'
         onChange={handleChange} />
         <Form.Input type="number" name="price" defaultValue={userData.price} fluid label='Flight Price' placeholder='Flight Price USD' 
         onChange={handleChange}/>
        </Form.Group>
        <Form.TextArea label='About' name="body" defaultValue={userData.body} placeholder='Tell us more about your trip'
        onChange={handleChange} />
        <Form.Button onClick={handleSubmit} >Submit</Form.Button>
      </Form>
      
      <div>

<Card
name
/>
  </div>
      

      </>
    )
  }


export default JournalForm 