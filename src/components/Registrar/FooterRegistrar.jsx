import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDribbble, faGithub, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

const FooterLogout = () => {
  return(
    <footer classname="footer py-5">
<div className="container">
  <div className="row">
    <div className="col-lg-8 mb-4 mx-auto text-center">
      <a href="#" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">Company</a>
      <a href="#" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">About Us</a>
      <a href="#" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">Team</a>
      <a href="#" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">Products</a>
      <a href="#" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">Pricing</a>
    </div>
    <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
      <a href="#" className="text-secondary me-xl-4 me-4">
        <span className="text-lg">
          <FontAwesomeIcon icon={ faDribbble }/>
        </span>
      </a>
      <a href="#" className="text-secondary me-xl-4 me-4">
        <span className="text-lg">
          <FontAwesomeIcon icon={ faTwitter }/>
        </span>
      </a>
      <a href="#" className="text-secondary me-xl-4 me-4">
        <span className="text-lg">
          <FontAwesomeIcon icon={ faInstagram }/>
        </span>
      </a>
      <a href="#" className="text-secondary me-xl-4 me-4">
        <span className="text-lg">
<FontAwesomeIcon icon={ faGithub }/>
        </span>
      </a>
    </div>
  </div>
</div>
    </footer>
  )
}

export default FooterLogout;
