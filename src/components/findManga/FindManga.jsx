// css
import "./findManga.css";
// react + router
import { useState } from "react";
import { Link } from "react-router-dom";
// icon from react icon
import { MdKeyboardArrowDown as Arrow } from "react-icons/md";

export default function FindManga() {
  const [affichage1, setAffichage1] = useState(true);
  const [affichage2, setAffichage2] = useState(true);
  const [affichage3, setAffichage3] = useState(true);
  const [affichage4, setAffichage4] = useState(true);
  const [affichage5, setAffichage5] = useState(true);

  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [choice3, setChoice3] = useState(null);

  function affichage(props1, props2) {
    props1(!props2);
  }

  function choiceTrue(props) {
    props(true);
  }

  function choiceFalse(props) {
    props(false);
  }

  //function resultats(props){redirection + envoi props}

  return (
    <div className="containerFindManga">
      {/* vide */}
      <h1>Vous voulez lire un manga ...</h1>
      <div className="containerFindManga_1">
        <h2 onClick={() => affichage(setAffichage1, affichage1)}>
          Classique style shonen ?
          <Arrow style={{ fontSize: "30px" }} />
        </h2>
        {affichage1 ? (
          <ul onClick={() => affichage(setAffichage1, affichage1)}>
            <li onClick={() => choiceTrue(setChoice1)}>Carrément !</li>
            <li onClick={() => choiceFalse(setChoice1)}>Non pas du tout.</li>
          </ul>
        ) : null}
      </div>
      {/* vide */}
      {choice1 === true ? (
        <div>
          <h2 onClick={() => affichage(setAffichage2, affichage2)}>
            Plutôt action, aventure ou sport ?
            <Arrow style={{ fontSize: "30px" }} />
          </h2>
          {affichage2 ? (
            <ul>
              <Link to={{ pathname: "/results", state: 1 }}>
                <li>Action</li>
              </Link>
              <Link to={{ pathname: "/results", state: 2 }}>
                <li>Aventure</li>
              </Link>
              <Link to={{ pathname: "/results", state: 30 }}>
                {" "}
                <li>Sports</li>
              </Link>
            </ul>
          ) : null}
        </div>
      ) : null}
      {/* vide */}
      {choice1 === false ? (
        <div>
          <h2 onClick={() => affichage(setAffichage2, affichage2)}>
            Un manga plutôt sombre alors ?{" "}
            <Arrow style={{ fontSize: "30px" }} />
          </h2>
          {affichage2 ? (
            <ul onClick={() => affichage(setAffichage2, affichage2)}>
              <li onClick={() => choiceTrue(setChoice2)}>Oui !</li>
              <li onClick={() => choiceFalse(setChoice2)}>Toujours pas.</li>
            </ul>
          ) : null}
        </div>
      ) : null}
      {/* vide */}
      {(choice1 === false) & (choice2 === true) ? (
        <div>
          <h2 onClick={() => affichage(setAffichage3, affichage3)}>
            Orienté vers ...
            <Arrow style={{ fontSize: "30px" }} />
          </h2>
          {affichage3 ? (
            <ul>
              <Link to={{ pathname: "/results", state: 8 }}>
                {" "}
                <li>Drama</li>
              </Link>

              <Link to={{ pathname: "/results", state: 14 }}>
                {" "}
                <li>Horreur</li>
              </Link>

              <Link to={{ pathname: "/results", state: 40 }}>
                {" "}
                <li>Psychologique</li>
              </Link>

              <Link to={{ pathname: "/results", state: 45 }}>
                {" "}
                <li>Suspense</li>
              </Link>
            </ul>
          ) : null}
        </div>
      ) : null}
      {/* vide */}
      {(choice1 === false) & (choice2 === false) ? (
        <div>
          <h2 onClick={() => affichage(setAffichage4, affichage4)}>
            Je sais, un manga drôle ! <Arrow style={{ fontSize: "30px" }} />
          </h2>
          {affichage4 ? (
            <ul onClick={() => affichage(setAffichage3, affichage3)}>
              <Link to={{ pathname: "/results", state: 20 }}>
                {" "}
                <li onClick={() => choiceTrue(setChoice3)}>Enfin ! Oui ! </li>
              </Link>

              <li onClick={() => choiceFalse(setChoice3)}>Non...</li>
            </ul>
          ) : null}
        </div>
      ) : null}
      {/* vide */}
      {choice3 === true ? <div>fetch</div> : null}
      {/* vide */}
      {(choice1 === false) & (choice2 === false) & (choice3 === false) ? (
        <div>
          <h2 onClick={() => affichage(setAffichage5, affichage5)}>
            Il ne reste que les mangas tranches de vie :
            <Arrow style={{ fontSize: "30px" }} />
          </h2>
          {affichage5 ? (
            <ul>
              <Link to={{ pathname: "/results", state: 23 }}>
                {" "}
                <li>School</li>
              </Link>

              <Link to={{ pathname: "/results", state: 19 }}>
                {" "}
                <li>Musique</li>
              </Link>

              <Link to={{ pathname: "/results", state: 48 }}>
                {" "}
                <li>Work Life</li>
              </Link>

              <Link to={{ pathname: "/results", state: 36 }}>
                {" "}
                <li>Slice of life</li>
              </Link>
            </ul>
          ) : null}
        </div>
      ) : null}

      {/* vide */}
    </div>
  );
}
