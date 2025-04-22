import {
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./index.scss";

const Socials = (props) => {
  return (
    <>
      <ul className="iconList">
        <li className="icons">
          <Link
            to={props.lilink}
            target="_blank"
            alt="LinkedIn"
            aria-label="link with us on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} alt="LinkedIn" />
          </Link>
        </li>
        <li className="icons">
          <Link
            to={props.fblink}
            target="_blank"
            alt="facebook"
            aria-label="follow us on facebook"
          >
            <FontAwesomeIcon icon={faFacebook} alt="facebook" />
          </Link>
        </li>
        
      </ul>
    </>
  );
};

export default Socials;
