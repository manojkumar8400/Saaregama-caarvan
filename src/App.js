import React, { useState } from "react";
import "./styles.css";

var Singers = {
  arijeet_singh: [
    { songs: "Galti Se Mistake", rating: " rating 4.5/5" },
    { songs: "Tera Yaar Hoon Main", rating: "rating: 3.8/5" },
    { songs: "Desh Mere", rating: "rating:4/5" },
    { songs: "Humdard", rating: "rating: 3/5" }
  ],
  sonu_nigam: [
    { songs: "Bhagwan Hai Kahan Re Tu", rating: "rating: 4.5/5" },
    { songs: "Bole Chudiyan", rating: "rating: 3.5/5" },
    { songs: "Papa Mere Papa", rating: "rating: 4/5" },
    { songs: "Har Ek Friend Kamina Hota Hai", rating: "rating: 4/5" }
  ],
  lata_mangeshkar: [
    { songs: "Aesa Desh Hai Mera", rating: "rating: 5/5" },
    { songs: "Dil Pardeshi Ho Gya", rating: "rating: 4/5" },
    { songs: " Tu Kitni Achhi Hai", rating: "rating: 3.5/5" },
    { songs: "Ho Gya Hai Tujhko To Pyar sajna", rating: "rating: 4/5 " }
  ],
  kishor_kumar: [
    { songs: "Ek Ladki Bheegi Bhaagi Si", rating: " rating: 4/5" },
    { songs: "Ruk Ja Rokta Hai Yeh Diwana", rating: " rating:3/5" },
    { songs: "Chhedo Na Meri Zulfen", rating: "rating:4.5/5" },
    { songs: "Koi Humdard Na Rha", rating: "3.5/5" }
  ]
};

var songsknow = Object.keys(Singers);

export default function App() {
  const [songs, setsongs] = useState("arijeet_singh");
  function genreClickHandler(genre) {
    setsongs(genre);
  }
  return (
    <div className="App">
      <h1>Saaregama-Caarvan</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Singers Song. Select a Singer to get started...{" "}
      </p>

      <div>
        {songsknow.map((genre) => (
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
          {Singers[songs].map((bollywood) => (
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
              <div style={{ fontSize: "larger" }}> {bollywood.songs} </div>
              <div style={{ fontSize: "smallj" }}> {bollywood.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
