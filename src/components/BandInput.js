// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super();
    this.state={
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //
  //   this.props.addBand(this.state);
  //   this.setState({
  //     name: ''
  //   })
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if (this.state.name !== ''){
      this.props.addBand(this.state);
      this.setState({
        name: '',
      });
    }
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add band</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}



export default BandInput;
