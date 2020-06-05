import React from 'react'
import { Form } from 'semantic-ui-react'



const JournalForm = ({ author, body, price, depCity, arrCity, date, handleChange, handleSubmit }) => {

  return (
    <div className="containerHome">
      <Form >
        <Form.Group widths='equal'>
          <Form.Input
            fluid label='Name' placeholder='Name' defaultValue={author} name="author"
            onChange={handleChange} />
          <Form.Input fluid label='Departing City' name="depCity" defaultValue={depCity} placeholder='Departing City'
            onChange={handleChange} />
          <Form.Input fluid label='Arriving City' name="arrCity" defaultValue={arrCity} placeholder='Arriving City'
            onChange={handleChange} />
          <Form.Input type="number" name="price" defaultValue={price} fluid label='Flight Price' placeholder='Flight Price USD'
            onChange={handleChange} />
        </Form.Group>
        <Form.TextArea label='About' name="body" defaultValue={body} placeholder='Tell us more about your trip'
          onChange={handleChange} />
        <Form.Button onClick={handleSubmit} >Submit</Form.Button>
      </Form>

      <div>


      </div>


    </div>
  )
}



export default JournalForm 