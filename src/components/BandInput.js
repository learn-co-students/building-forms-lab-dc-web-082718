import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ""
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)

    this.setState({
      name: ""
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Band:
            <input type="text" value={this.state.name} onChange={this.handleOnChange} name="name"/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
