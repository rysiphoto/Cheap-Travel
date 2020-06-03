import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'



class JournalForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input  fluid label='Name' placeholder='Name' />
          <Form.Input fluid label='Departing City' placeholder='Departing City' />
         <Form.Input fluid label='Arriving City' placeholder='Arriving City' />
         <Form.Input type="number" fluid label='Flight Price' placeholder='Flight Price USD' />
        </Form.Group>
        <Form.TextArea label='About' placeholder='Tell us more about your trip' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default JournalForm 