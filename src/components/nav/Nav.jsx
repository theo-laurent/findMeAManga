// css
import "./nav.css";
// import link router
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="containerNav">
      <h1>FIND ME A MANGA</h1>
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
