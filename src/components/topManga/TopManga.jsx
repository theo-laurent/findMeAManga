import "./topManga.css";
// react and router
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
// uuid for unique key
import { v4 as uuidv4 } from "uuid";
// import de l'array topPersonal
import topPersonal from "../../assets/personalManga";

export default function TopManga() {
  const [top, setTop] = useState([]);

  useEffect(function () {
    fetch("https://api.jikan.moe/v3/top/manga", { method: "GET" })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setTop(data.top);
      })
      .catch(function (error) {
        return error;
      });
  }, []);
  top.splice(15, 35);

  return (
    <div className="containerTopManga">
      {/* */}
      <div className="containerTopManga__apiTop">
        <h2>Le top de 2021</h2>
        {top.map((manga) => (
          <Link key={uuidv4()} to={`/results/${manga.mal_id}`}>
            <div className="containerTopManga__card">
              <img src={manga.image_url} alt={manga.title} />
              <p>
                {manga.rank}
                {". "}
                {manga.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {/* */}
      <div className="containerTopManga__apiTop">
        <h2>Le top pas objectif du créateur du site</h2>
        {topPersonal.map((manga) => (
          <Link key={uuidv4()} to={`/results/${manga.mal_id}`}>
            <div className="containerTopManga__card">
              <img src={manga.img_url} alt={manga.title} />
              <p>
                {manga.rank}
                {". "}
                {manga.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
