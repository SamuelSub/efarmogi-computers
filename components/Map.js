import Script from 'next/script'
import Image from 'next/image'
import mapImg from '../public/map-img.png'
import styles from '../styles/Map.module.css'
import Link from 'next/link'

const Map = () => {

  const link = <Script src={"https://goo.gl/maps/qR2Q6F38DoecmJNTA"}/>;
    
  return (
    <Link href={link.props.src} passHref>
      <a target="_blank" className={styles.mapImg}><Image src={mapImg} alt="map image" quality={100}/></a>
    </Link>
  )
}

export default Map
