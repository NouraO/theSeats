import React from "react";
import S from "./S.jpg";
import S1 from "./S1.jpg";
import S2 from "./S2.jpeg";

const styles = {
  theSeats: {
    margin: "30px",
  },

  list: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  text: {
    textAlign: "center",
  },
  theSeats1: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  theSeats2: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },

  theSeats3: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
};
function App() {
  return (
    <div>
      <div>
        <div style={styles.theseats}>
          <h1 style={styles.text}>The Seats</h1>
          <h3 style={styles.text}>We support all your occasions!</h3>

          <img
            src={S}
            width="450"
            height="450"
            alt=" The Seats "
            style={styles.theSeats}
          />
        </div>

        <div style={styles.theseats}>
          <img
            src={S1}
            width="300"
            height="450"
            alt=" The Seats1 "
            style={styles.theSeats1}
          />
          <p> 8 - 12 person</p>
          <p>100 KD</p>
        </div>
      </div>

      <div style={styles.theseats}>
        <img
          src={S2}
          width="300"
          height="450"
          alt=" The Seats2 "
          style={styles.theSeats3}
        />
        <p> 18 - 24 person</p>
        <p>130 KD</p>
      </div>
    </div>
  );
}

export default App;
