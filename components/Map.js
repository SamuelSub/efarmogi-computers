import React, { Component } from 'react'

export default class Map extends Component {

  componentDidMount() {
    document.querySelector('iframe').style.display = 'block';
  }

  render() {
    return (
      <iframe style={{display: 'none'}} title="map"
        frameBorder="0"
        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=Efarm0g1+Computers`}allowFullScreen>
      </iframe> 
    )
  }
}

