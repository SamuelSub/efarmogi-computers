import Script from 'next/script'
import React, {Component} from 'react'

export default class Map extends Component {

  render() {

    const url = <Script src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=Efarm0g1+Computers`}/>

    return (
      <iframe title="map"
        frameBorder="0"
        loading="lazy"
        src={url.props.src}allowFullScreen>
      </iframe> 
    )
  }
}

