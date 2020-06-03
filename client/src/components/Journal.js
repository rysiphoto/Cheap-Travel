import React, { Component } from 'react'
import Card from "./Card"
import JournalForm from "./Form"

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
 <JournalForm/>
<Card/>
<Card/>
<Card/>
 </>

        )
   }
}

