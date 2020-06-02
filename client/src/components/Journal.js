import React, { Component } from 'react'
import Card from "./Card"

export default class Journal extends Component {
  state = { 
    author:"",
    body:"",
    price: Number,
    depCity: "",
    arrCity: "",
    date: ""
}
   render() {
        return (
 <>
<Card/>
<Card/>
<Card/>
 </>

        )
   }
}

