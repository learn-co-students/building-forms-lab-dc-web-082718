import React, { Component } from 'react'
import BandInput from '../components/BandInput'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (newBand) => dispatch({type: "ADD_BAND", payload: newBand})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
