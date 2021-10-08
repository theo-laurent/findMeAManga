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
      <h1>You want to read a manga ...</h1>
      <div className="containerFindManga_1">
        <span onClick={() => affichage(setAffichage1, affichage1)}>
          <h2>Classic, typical shonen?</h2>{" "}
          <Arrow style={{ fontSize: "30px" }} />
        </span>
        {affichage1 ? (
          <ul onClick={() => affichage(setAffichage1, affichage1)}>
            <li onClick={() => choiceTrue(setChoice1)}>Totally !</li>
            <li onClick={() => choiceFalse(setChoice1)}>No.</li>
          </ul>
        ) : null}
      </div>
      {/* vide */}
      {choice1 === true ? (
        <div>
          <span onClick={() => affichage(setAffichage2, affichage2)}>
            <h2>Rather action, aventure or sport ?</h2>
            <Arrow style={{ fontSize: "30px" }} />
          </span>

          {affichage2 ? (
            <ul>
              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 1, name: "Action" },
                }}
              >
                <li>Action</li>
              </Link>
              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 2, name: "Adventure" },
                }}
              >
                <li>Adventure</li>
              </Link>
              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 30, name: "Sports" },
                }}
              >
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
          <span onClick={() => affichage(setAffichage2, affichage2)}>
            {" "}
            <h2>A dark manga then?</h2>
            <Arrow style={{ fontSize: "30px" }} />
          </span>

          {affichage2 ? (
            <ul onClick={() => affichage(setAffichage2, affichage2)}>
              <li onClick={() => choiceTrue(setChoice2)}>Yes !</li>
              <li onClick={() => choiceFalse(setChoice2)}>Not at all</li>
            </ul>
          ) : null}
        </div>
      ) : null}
      {/* vide */}
      {(choice1 === false) & (choice2 === true) ? (
        <div onClick={() => affichage(setAffichage3, affichage3)}>
          <span>
            {" "}
            <h2>Facing...</h2>v
          </span>

          {affichage3 ? (
            <ul>
              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 8, name: "Drama" },
                }}
              >
                {" "}
                <li>Drama</li>
              </Link>

              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 14, name: "Horror" },
                }}
              >
                {" "}
                <li>Horror</li>
              </Link>

              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 40, name: "Psychological" },
                }}
              >
                {" "}
                <li>Psychological</li>
              </Link>

              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 45, name: "Suspense" },
                }}
              >
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
          <span onClick={() => affichage(setAffichage4, affichage4)}>
            {" "}
            <h2>I know, a funny manga!</h2>{" "}
            <Arrow style={{ fontSize: "30px" }} />
          </span>

          {affichage4 ? (
            <ul onClick={() => affichage(setAffichage3, affichage3)}>
              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 20, name: "Comedy" },
                }}
              >
                {" "}
                <li onClick={() => choiceTrue(setChoice3)}>Finnaly ! Yes ! </li>
              </Link>

              <li onClick={() => choiceFalse(setChoice3)}>Always not...</li>
            </ul>
          ) : null}
        </div>
      ) : null}
      {/* vide */}
      {choice3 === true ? <div>fetch</div> : null}
      {/* vide */}
      {(choice1 === false) & (choice2 === false) & (choice3 === false) ? (
        <div onClick={() => affichage(setAffichage5, affichage5)}>
          <span>
            {" "}
            <h2>There are only the slices of life manga left:</h2>{" "}
            <Arrow style={{ fontSize: "30px" }} />
          </span>

          {affichage5 ? (
            <ul>
              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 23, name: "School" },
                }}
              >
                {" "}
                <li>School</li>
              </Link>

              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 19, name: "Music" },
                }}
              >
                {" "}
                <li>Musique</li>
              </Link>

              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 48, name: "Work Life" },
                }}
              >
                {" "}
                <li>Work Life</li>
              </Link>

              <Link
                to={{
                  pathname: "/results",
                  state: { genre: 36, name: "Slice of life" },
                }}
              >
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
