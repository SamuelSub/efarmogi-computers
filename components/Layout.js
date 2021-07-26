import Nav from '../components/Nav';
import styles from '../styles/navbar.module.css';


const Layout = ({children}) => {
  return (
    <>
     <Nav />
      {children}
    </>
  )
}

export default Layout
