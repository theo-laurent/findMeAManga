import "./results.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Results(props) {
  const [arrayManga, setArrayManga] = useState([]);

  const genre = props.location.state;

  useEffect(
    function () {
      fetch(
        `https://api.jikan.moe/v3/search/manga?q=&order_by=members&genre=${genre}`,
        {
          method: "GET",
        }
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setArrayManga(data.results);
        })
        .catch(function (error) {
          return error;
        });
    },
    [genre]
  );

  console.log(arrayManga);

  return (
    <div className="containerResultsGlobal">
      <h1>Les mangas correspondant</h1>
      <div className="containerResults">
        {arrayManga.map(function (manga) {
          return (
            <div className="containerResults_manga" key={uuidv4()}>
              <img src={manga.image_url} alt="" />{" "}
              <div className="containerResults_manga_double">
                <ul>
                  <li>
                    <strong>Note:</strong> {manga.score}
                  </li>
                  <li>
                    <strong>Synopsis:</strong>
                    <strong /> {manga.synopsis}
                  </li>
                </ul>
              </div>
              <div className="containerResults_manga_text">
                <h2 title={manga.title}>{manga.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
