import React, { useState } from "react";
import "./styles.css";

var Singers = {
  arijeet_singh: [
    { movie: "Galti Se Mistake", rating: " rating 4.5/5" },
    { movie: "Tera Yaar Hoon Main", rating: "rating: 3.8/5" },
    { movie: "Desh Mere", rating: "rating:4/5" },
    { movie: "Humdard", rating: "rating: 3/5" }
  ],
  sonu_nigam: [
    { movie: "Bhagwan Hai Kahan Re Tu", rating: "rating: 4.5/5" },
    { movie: "Bole Chudiyan", rating: "rating: 3.5/5" },
    { movie: "Papa Mere Papa", rating: "rating: 4/5" },
    { movie: "Har Ek Friend Kamina Hota Hai", rating: "rating: 4/5" }
  ],
  lata_mangeshkar: [
    { movie: "Aesa Desh Hai Mera", rating: "rating: 5/5" },
    { movie: "Dil Pardeshi Ho Gya", rating: "rating: 4/5" },
    { movie: " Tu Kitni Achhi Hai", rating: "rating: 3.5/5" },
    { movie: "Ho Gya Hai Tujhko To Pyar sajna", rating: "rating: 4/5 " }
  ],
  kishor_kumar: [
    { movie: "Ek Ladki Bheegi Bhaagi Si", rating: " rating: 4/5" },
    { movie: "Ruk Ja Rokta Hai Yeh Diwana", rating: " rating:3/5" },
    { movie: "Chhedo Na Meri Zulfen", rating: "rating:4.5/5" },
    { movie: "Koi Humdard Na Rha", rating: "3.5/5" }
  ]
};

var movieknow = Object.keys(Singers);

export default function App() {
  const [movie, setmovie] = useState("arijeet_singh");
  function genreClickHandler(genre) {
    setmovie(genre);
  }
  return (
    <div className="App">
      <h1>🎥Bollywood-Masala🎥</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Singers Song. Select a Singer to get started...{" "}
      </p>

      <div>
        {movieknow.map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingBlock: "0" }}>
          {Singers[movie].map((bollywood) => (
            <li
              key={bollywood}
              style={{
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {bollywood.movie} </div>
              <div style={{ fontSize: "smallj" }}> {bollywood.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
