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

  Margin: { margin: "30px" },
  text: {
    textAlign: "center",
  },
  theSeats1: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "500px",
  },
  theSeats2: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "350px",
  },

  theSeats3: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "393px",
  },
};
function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>The Seats</h1>
        <h3 style={styles.text}>We support all your occasions!</h3>

        <img src={S} alt=" The Seats " style={styles.theSeats1} />
      </div>
      <div style={styles.list}>
        <div style={styles.Margin}>
          <img src={S1} alt=" The Seats1 " style={styles.theSeats2} />
          <p> 8 - 12 person</p>
          <p>100 KD</p>
        </div>

        <div style={styles.Margin}>
          <img src={S2} alt=" The Seats2 " style={styles.theSeats3} />
          <p> 18 - 24 person</p>
          <p>130 KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
