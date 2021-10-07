import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import "./mangaDetails.css";

export default function MangaDetails() {
  const [manga, setManga] = useState();
  const id = useParams().id;

  useEffect(
    function () {
      fetch(`https://api.jikan.moe/v3/manga/${id}`, { method: "GET" })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setManga(data);
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
      {manga ? (
        <div className="containerMangaDetails">
          <img src={manga.image_url} alt="" />
          <div className="containerMangaDetails_text">
            <h2>Titre</h2>
            <h3>Auteur</h3>
            <p>synopsis</p>
          </div>
        </div>
      ) : (
        <div>chargement</div>
      )}
    </>
  );
}
