// style css
import "./mangaDetails.css";
// react
import { useEffect, useState } from "react";
// react router
import { useParams, useHistory } from "react-router-dom";
// react icons
import { BsArrowReturnLeft } from "react-icons/bs";
// uuid for unique key
import { v4 as uuidv4 } from "uuid";

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

  return (
    <>
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
              <h4>
                <u>More infos</u>
              </h4>
              {manga.external_links.map((link) => (
                <p key={uuidv4()}>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </p>
              ))}
              <div className="containerMangaDetails_text_infos">
                <p>
                  <span style={{ fontWeight: "bold" }}>Publication :</span>
                  <span style={{ color: "#C21A1A" }}> {manga.status}</span>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Number of chapters :
                  </span>
                  <span style={{ color: "#C21A1A" }}>
                    {" "}
                    {manga.chapters ? manga.chapters : "Undefined"}
                  </span>
                </p>
              </div>
              <p>
                Published from {manga.published.from.slice(0, 4)} to{" "}
                {manga.published.to
                  ? manga.published.to.slice(0, 4)
                  : "/still in progress/"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
