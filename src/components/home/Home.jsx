import "./home.css";
//
import { Link } from "react-router-dom";
import image from "../../assets/123.png";

export default function Home() {
  return (
    <div className="containerHome">
      <img src={image} alt="" />
      <div>
        <h1>
          Out of inspiration ?
          <br />
          Find a manga to read !
        </h1>
        <button className="containerHome_btn">
          <Link to="/find">CLICK HERE</Link>
        </button>
      </div>
    </div>
  );
}
