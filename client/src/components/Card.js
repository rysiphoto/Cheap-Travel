import React, {useState, useImperativeHandle} from "react"
import { 
    Container,
    Image,
    Item,
   } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { ListItem, List } from "./List";
import JournalForm from "./Form"

const Card = () => {
  
  const[userData, setUserData] = useState({
      name: "",
      date: Date.now(),
      body: "",
      depCity:"",
      arrCity:"",
      price:Number,
  })
  const {name, date, body, depCity, arrCity, price} = userData;

const handleSubmit = e => {
  e.preventDefault()
}



    return (
     
        <Container>
        <Item.Group divided>
          <Item>
            <Item.Image src='/images/wireframe/image.png' />
            <List>
              <Item.Header name="name" as='a'>'s Travel Experience</Item.Header>
              <ListItem>
                <span></span>
                <span></span>
              </ListItem>
              <Item.Description>
                
              </Item.Description>
              <Item.Extra>
                <Image avatar circular src='/images/wireframe/square-image.png' />
               
              </Item.Extra>
            </List>
          </Item>
          </Item.Group>
          </Container>
  

     
    )

}

export default Card