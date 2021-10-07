import "./banner1.css";
import image2 from "../../assets/banner2.png";

export default function Banner1() {
  return (
    <div className="containerBanner1">
      <h1>Find me a manga !</h1>
      <div>
        <img src={image2} alt="" />
      </div>
    </div>
  );
}
