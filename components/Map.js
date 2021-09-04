
const Map = () => {

  return (
    <iframe title="map"
      frameBorder="0"
      loading="lazy"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=Efarm0g1+Computers`}allowFullScreen>
    </iframe> 
  )
}

export default Map
