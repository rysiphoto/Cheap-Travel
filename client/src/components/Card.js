import React, {useState, useImperativeHandle} from "react"
import { 
    Container,
    Image,
    Item,
   } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { ListItem, List } from "./List";


const Card = ({post}) => {

  const {author, date, body, depCity, arrCity, price} = post;

    return (
     
        <Container>
        <Item.Group divided>
          <Item>
            {/* <Item.Image src='/images/wireframe/image.png' /> */}
            <List>
              <Item.Header name="author" as='a' >{author}'s Travel Experience</Item.Header>

              <Item.Description>
               Flying from <b> {depCity} </b>
              </Item.Description>
              <Item.Description>
                Flying to <b>{arrCity}</b>
              </Item.Description><br/>
              <Item.Description>
            {body}
              </Item.Description>
{/*               
         
              <Item.Extra>
                <Image avatar circular src='/images/wireframe/square-image.png' />
               
              </Item.Extra> */}
            </List>
          </Item>
          </Item.Group>
          </Container>
  

     
    )

}

export default Card