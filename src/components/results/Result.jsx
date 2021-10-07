// css
import "./results.css";
// react et router
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// uuid for unique key
import { v4 as uuidv4 } from "uuid";

export default function Results(props) {
  const [arrayManga, setArrayManga] = useState([]);
  const genre = props.location.state;

  useEffect(
    function () {
      Promise.all([
        fetch(
          `https://api.jikan.moe/v3/search/manga?q=&order_by=members&genre=${genre}&page=1`,
          {
            method: "GET",
          }
        ),
        fetch(
          `https://api.jikan.moe/v3/search/manga?q=&order_by=members&genre=${genre}&page=2`,
          {
            method: "GET",
          }
        ),
      ])
        .then(function (res) {
          return Promise.all(
            res.map(function (response) {
              return response.json();
            })
          );
        })
        .then(function (data) {
          let arrayManga = data[0].results.concat(data[1].results);
          setArrayManga(arrayManga);
        })
        .catch(function (error) {
          return error;
        });
    },
    [genre]
  );


  return (
    <div className="containerResultsGlobal">
      <h1>Les mangas correspondant à vos critères :</h1>
      <div className="containerResults">
        {arrayManga.map(function (manga) {
          return (
            <div className="containerResults_manga" key={uuidv4()}>
              <Link to={`/results/${manga.mal_id}`}>
                <img src={manga.image_url} alt="" />{" "}
                <div className="containerResults_manga_double">
                  <ul>
                    <li>
                      <strong>Note:</strong> {manga.score}
                    </li>
                    <li>
                      <strong>Synopsis: </strong>
                      {manga.synopsis}
                    </li>
                  </ul>
                </div>
                <div className="containerResults_manga_text">
                  <h2 title={manga.title}>{manga.title}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
