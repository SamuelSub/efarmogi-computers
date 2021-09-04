import { useEffect, useState } from "react"

const Map = () => {

  let [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div>
      {isLoaded && (
        <iframe title="map"
          frameBorder="0"
          loading="lazy"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=Efarm0g1+Computers`}allowFullScreen>
        </iframe>
      )}
    </div>
     
  )
}

export default Map
