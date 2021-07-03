import Siderbar from './layout/Siderbar'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Municipio from './Municipio/Municipio';
import Estado from './Estado/Estado';
import Parroquia from './Parroquia/Parroquia';
import {useState} from 'react';


const Layout = () => {

  const styleSiderHidden = {
    aside: "sidenav navbat navbar-vertical navbar-expand-xs border-0 fixed-left",
    main: '15.65rem',
    menu: true
  }

  const [styleAside, setStyleAside] = useState(styleSiderHidden);

  const handleSiderHidden = () => {
    if (styleAside.menu) {
      document.body.classList.add('g-sidenav-pinned');
      setStyleAside({
        ...styleAside,
        main: '0',
        menu: false
      })
    } else {
      document.body.classList.remove('g-sidenav-pinned');
      setStyleAside(styleSiderHidden)
    }
  }

  const handleMenu = () => {
    if (styleAside.menu) {
      setStyleAside({
        ...styleAside,
        main: '0px',
        aside: styleAside.aside + ' d-none',
        menu: false
      })
    } else {
      setStyleAside(styleSiderHidden)
    }
  }

  return (
    <div className="g-sidenav-show bg-gray-100 min-vw-100">
      <Siderbar
        estilo={styleAside.aside}
      />
      <main className="main-content border-radius-lg min-vh-100" style={{marginLeft: styleAside.main}}>
        <Navbar
          handleSiderHidden={handleSiderHidden}
          handleMenu={handleMenu}
        />
        <Parroquia />
        <Footer />
      </main>
    </div>
  )
}
export default Layout
