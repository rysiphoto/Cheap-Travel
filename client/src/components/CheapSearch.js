import React from "react"
import { Button, Form } from 'semantic-ui-react'


const CheapSearch = () => {
      return (
      <div>
            <br></br>
            <br></br>
            <Form>
              <Form.Group unstackable widths={2}>
                <Form.Input width={5} label='Departing City' placeholder='City You Will Be Leaving From' />
                <Form.Input width={5} label='Destination City' placeholder='City You Will Be Flying To' />
              </Form.Group>
              <Form.Group widths={2}>
                <Form.Input width={5} type="date" label='Departure Date' />
              </Form.Group>
              
              <Button type='submit'>Submit</Button>
            </Form>

      </div>
          )
}

export default CheapSearch;