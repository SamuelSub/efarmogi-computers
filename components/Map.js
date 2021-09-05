import { useEffect, useState } from "react"
import Script from 'next/script'

const Map = () => {

  const [link, setLink] = useState(null);

  useEffect(() => {
    const map = <Script src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=Efarm0g1+Computers`}/>
    setLink(map.props.src)
  },[]);

  return (
    <iframe title="map"
      frameBorder="0"
      loading="lazy"
      src={link}allowFullScreen>
    </iframe> 
  )
}

export default Map
