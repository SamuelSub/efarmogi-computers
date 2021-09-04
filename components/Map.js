import { useEffect } from "react"

const Map = () => {

  // let [isLoaded, setIsLoaded] = useState(false)

  const createMap = () => {
    let fr = document.createElement('iframe');
    fr.src = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY}&q=Efarm0g1+Computers`;
    fr.title = 'map';
    fr.loading = 'lazy';
    fr.allowFullscreen = true;
    fr.frameBorder = 'none'
    const mapContainer = document.querySelector('.map-container');
    mapContainer.append(fr);
  }

  useEffect(() => {
    // setIsLoaded(true)
    const map = document.querySelector('.map-container');
    if(map.innerHTML == '') {
      createMap();
    } else {
      return
    }
  }, [])

  return (
    <div className="map-container"></div>
  )
}

export default Map
