// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ""

    }
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <input value = {this.state.name} onChange = {this.handleChange} name ="name" type = "text"/>
          <button> Submit </button>
        </form>
      </div>
    )
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state)
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      name : e.target.value
    })
  }
}

export default BandInput
