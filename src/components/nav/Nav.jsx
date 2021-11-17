// css
import "./nav.css";
// import link router
import { NavLink, Link } from "react-router-dom";
// import react state
import { useState } from "react";
// import icon
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export default function Nav() {
  const [test, setTest] = useState(false);

  function navClick() {
    return setTest(!test);
  }

  return (
    <div className="containerNav">
      <Link to="/">
        {" "}
        <h1>FIND ME A MANGA</h1>
      </Link>
      <div className="containerNav_responsive" onClick={navClick}>
        {!test ? (
          <GiHamburgerMenu className="iconNav" />
        ) : (
          <GrClose className="iconNav" />
        )}
        <ul
          className={
            test
              ? "containerNav_responsive-open"
              : "containerNav_responsive-close"
          }
        >
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/find" exact>
              Find a manga
            </NavLink>
          </li>

          <li>
            <NavLink to="/top" exact>
              Top mangas
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className="containerNav_ul">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/find" exact activeClassName="active">
            Find a manga
          </NavLink>
        </li>

        <li>
          <NavLink to="/top" exact activeClassName="active">
            Top mangas
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
