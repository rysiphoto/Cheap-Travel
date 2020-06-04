import React, { Component } from 'react'
import Card from "./Card"
import JournalForm from "./Form"
import axios from "axios"

export default class Journal extends Component {
  state = { 
   post: { 
    author:"",
    body:"",
    price: 0,
    depCity: "",
    arrCity: "",
    date: ""
  }, posts: []
}

componentDidMount(){
  this.getJournalEntries()
}

getJournalEntries = () =>{
  axios.get("/api/travel/journal")
  .then(res=> this.setState({posts: res.data}))
  .catch(err => console.log(err))
}

handleChange = e => {
  const {name, value} = e.target
  const post = { ... this.state.post}
  post[name] = value
  this.setState({post: post})
}

handleSubmit = e => {
  e.preventDefault()
  axios.post("/api/travel/journal", this.state.post)
  .then(res=> this.getJournalEntries())
  .catch(err => console.log(err))
}

   render() {
        return (
 <>
 <JournalForm
 author={this.state.post.author}
body={this.state.post.body}
depCity={this.state.post.depCity}
arrCity={this.state.post.arrCity}
price={this.state.post.price}
date={this.state.post.date}
 handleChange={this.handleChange}
 handleSubmit={this.handleSubmit}
 />
{this.state.posts.map(post => (
  <Card post={post} key={post._id}/>
))}
 </>

        )
   }
}

