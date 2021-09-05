import Script from 'next/script'
import Image from 'next/image'
import mapImg from '../public/map-img.png'
import styles from '../styles/Map.module.css'
import Link from 'next/link'

const Map = () => {

  const link = <Script src={"https://goo.gl/maps/qR2Q6F38DoecmJNTA"}/>;
    
  return (
    // <Link href={link.props.src} passHref>
    //   <a target="_blank" className={styles.mapImg}><Image src={mapImg} alt="map image" quality={100}/></a>
    // </Link>
    <div>
      <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=26.554936766624454%2C39.102005672047795%2C26.557618975639347%2C39.10346684144032&amp;layer=mapnik&amp;marker=39.10273626052978%2C26.556277871131897"></iframe><br/><small><a href="https://goo.gl/maps/qR2Q6F38DoecmJNTA">Προβολή Μεγαλύτερου Χάρτη</a></small>
    </div>
  )
}

export default Map
