import React, { Component } from 'react';
import BandInput from '../components/BandInput'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band)=>{dispatch({type: "ADD_BAND", band})}
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
