// style css
import "./mangaDetails.css";
// react
import { useEffect, useState } from "react";
// react router
import { useParams, useHistory } from "react-router-dom";
// react icons
import { BsArrowReturnLeft } from "react-icons/bs";

export default function MangaDetails() {
  const [manga, setManga] = useState();
  const [loading, setLoading] = useState(true);
  const id = useParams().id;
  const history = useHistory();

  useEffect(
    function () {
      fetch(`https://api.jikan.moe/v3/manga/${id}`, { method: "GET" })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setManga(data);
          setLoading(false);
        })
        .catch(function (error) {
          return error;
        });
    },
    [id]
  );

  console.log(manga);

  return (
    <>
      {loading ? (
        <div className="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
      ) : (
        <div className="containerMangaDetailsGlobal">
          <p
            onClick={() => history.goBack()}
            className="containerMangaDetails_text_back"
          >
            Back to results
            <BsArrowReturnLeft className="icon" />
          </p>
          <div className="containerMangaDetails">
            <img src={manga.image_url} alt="" />
            <div className="containerMangaDetails_text">
              <span className="containerMangaDetails_text_title">
                <h2>{manga.title}</h2>
                <h3>{manga.score} / 10</h3>
              </span>
              <h4>
                <u>Author(s)</u> :{" "}
                {manga.authors.map((author) => author.name + " / ")}
              </h4>
              <p>{manga.synopsis}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
