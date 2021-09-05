import Script from 'next/script'
import { useEffect, useState } from 'react';
import styles from '../styles/Map.module.css'

const Map = () => {

  const [mapLink, setMapLink] = useState(null);

  useEffect(() => {
    const map = <Script src={'https://www.openstreetmap.org/export/embed.html?bbox=26.554936766624454%2C39.102005672047795%2C26.557618975639347%2C39.10346684144032&amp;layer=mapnik&amp;marker=39.10273626052978%2C26.556277871131897'}/>;
    setMapLink(map.props.src)
  }, [])
    
  return (
    <div className={styles.frameWrapper}>
      <iframe src={mapLink}></iframe><br/><small><a href="https://goo.gl/maps/qR2Q6F38DoecmJNTA">Προβολή Μεγαλύτερου Χάρτη</a></small>
    </div>
  )
}

export default Map
