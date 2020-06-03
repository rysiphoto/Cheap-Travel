import React, {Fragment} from "react"
import { 
    Container,
    Image,
    Item,
   } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { ListItem, List } from "./List";


const Card = () => {
  
    return (
     
        <Container>
        <Item.Group divided>
          <Item>
            <Item.Image src='/images/wireframe/image.png' />
            <List>
              <Item.Header as='a'>Travel Experience</Item.Header>
              <ListItem>
                <span>Date</span>
                <span>Category</span>
              </ListItem>
              <Item.Description>
                A description which may flow for several lines and give context to the content.
              </Item.Description>
              <Item.Extra>
                <Image avatar circular src='/images/wireframe/square-image.png' />
                Username
              </Item.Extra>
            </List>
          </Item>
          </Item.Group>
          </Container>
  

     
    )

}

export default Card