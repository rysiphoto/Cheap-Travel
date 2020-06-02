import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar/";
export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          as={NavLink}
          exact
          to="/"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Travel Journal'
          active={activeItem === 'Travel Journal'}
          as={NavLink}
          exact
          to="/Journal"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Profile'
          active={activeItem === 'Profile'}
          as={NavLink}
          exact
          to="/Profile"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Cheap Flights'
          active={activeItem === 'CheapSearch'}
          as={NavLink}
          exact
          to="/CheapSearch"
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <NavBar />

        </Menu.Menu>
      </Menu>
    )
  }
}