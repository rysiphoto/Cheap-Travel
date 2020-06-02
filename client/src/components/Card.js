import React from "react"
import {  Button,
    Container,
  
    Icon,
    Image,
    Item,
    Label,
   } from "semantic-ui-react"

const Card = () => {
    return (
     
        <Container>
        <Item.Group divided>
          <Item>
            <Item.Image src='/images/wireframe/image.png' />
            <Item.Content>
              <Item.Header as='a'>Content Header</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context to the content.
              </Item.Description>
              <Item.Extra>
                <Image avatar circular src='/images/wireframe/square-image.png' />
                Username
              </Item.Extra>
            </Item.Content>
          </Item>
          </Item.Group>
          </Container>
  

     
    )

}

export default Card