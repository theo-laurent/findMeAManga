// css
import "./nav.css";
// import link router
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="containerNav">
      <ul className="containerNav_ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Find a manga</li>
        </Link>
        <Link to="/top">
          <li>Top mangas</li>
        </Link>
      </ul>
    </div>
  );
}
