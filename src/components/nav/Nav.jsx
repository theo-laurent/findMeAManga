// css
import "./nav.css";
// import link router
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="containerNav">
      <ul className="containerNav_ul">
        <Link to="/">
          <li>Trouver un manga</li>
        </Link>
        <Link to="/top">
          <li>Le top 10 mangas</li>
        </Link>
      </ul>
    </div>
  );
}
