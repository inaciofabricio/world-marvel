import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo.jpg"
import { faUserNinja, faUser, faFileLines, faCertificate, faMugHot, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => { 

  return(
    <header>
      <div>
        <span>
        </span>
      </div>
      <div className="menu">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo Marvel Api"/>
          </Link>
        </div>
        <div className="bars">
          <nav>
            <ul>
              <li>
                <Link className="menu__link" to="/" >
                  <FontAwesomeIcon icon={faUserNinja} />
                  <span className="title-link">Characters</span>
                </Link>
              </li>
              <li>
                <Link className="menu__link" to="/creators" >
                  <FontAwesomeIcon icon={faUser} />
                  <span className="title-link">Creators</span>
                </Link>
              </li>
              <li>
                <Link className="menu__link" to="/comics" >
                  <FontAwesomeIcon icon={faFileLines} />
                  <span className="title-link">Comics</span>
                </Link>
              </li>
              <li>
                <Link className="menu__link" to="/series" >
                  <FontAwesomeIcon icon={faList} />
                  <span className="title-link">Series</span>
                </Link>
              </li>
              <li>
                <Link className="menu__link" to="/events" >
                  <FontAwesomeIcon icon={faCertificate} />
                  <span className="title-link">Events</span>
                </Link>
              </li>
              <li>
                <Link className="menu__link" to="/stories" >
                  <FontAwesomeIcon icon={faMugHot} />
                  <span className="title-link">Stories</span>
                </Link>
              </li>
            </ul>
          </nav>
          </div>
        </div>
    </header>
  )
}

export default Header;