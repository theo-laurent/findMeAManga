// css
import "./nav.css";
// import link router
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export default function Nav() {
  const [test, setTest] = useState(false);

  function navClick() {
    return setTest(!test);
  }

  return (
    <div className="containerNav">
      <h1>FIND ME A MANGA</h1>

      <div className="containerNav_responsive" onClick={navClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="black"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <ul
          className={
            test
              ? "containerNav_responsive-open"
              : "containerNav_responsive-close"
          }
        >
          <li>
            <NavLink to="/findMeAManga/" exact>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/findMeAManga/find" exact>
              Find a manga
            </NavLink>
          </li>

          <li>
            <NavLink to="/findMeAManga/top" exact>
              Top mangas
            </NavLink>
          </li>
        </ul>
      </div>

      <ul className="containerNav_ul">
        <li>
          <NavLink to="/findMeAManga/" exact activeClassName="active">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/findMeAManga/find" exact activeClassName="active">
            Find a manga
          </NavLink>
        </li>

        <li>
          <NavLink to="/findMeAManga/top" exact activeClassName="active">
            Top mangas
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
