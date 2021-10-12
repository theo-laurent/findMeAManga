// css
import "./results.css";
// react et router
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// uuid for unique key
import { v4 as uuidv4 } from "uuid";

export default function Results(props) {
  const [arrayManga, setArrayManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const [arrayMangaSort, setArrayMangaSort] = useState();
  const genre = props.location.state.genre;
  const nameGenre = props.location.state.name;

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
          setLoading(false);
        })
        .catch(function (error) {
          return error;
        });
    },
    [genre]
  );

  function arraySort() {
    arrayManga.sort(function compare(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div className="containerResultsGlobal">
      <h1>The manga corresponding to your choices : {`{${nameGenre}}`}</h1>
      <span>
        <select id="results-select">
          <option>Sort by...</option>
          <option>Popularity</option>
          <option>Name</option>
          <option>Date: oldest to newest</option>
          <option>Date: newst to oldest</option>
        </select>
      </span>
      <div className="containerResults">
        {loading ? (
          <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        ) : (
          arrayManga.map(function (manga) {
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
          })
        )}
      </div>
    </div>
  );
}
