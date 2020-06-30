import React from "react";
import S from "./S.jpg";
import S1 from "./S1.jpg";
import S2 from "./S2.jpeg";

//Data
import Outdoorseatings from "./seatings";

//styles
import styles from "./styles";

function App() {
  console.log(Outdoorseatings[0].name);

  return (
    <div>
      <div>
        <h1 style={styles.text}>The Seats</h1>
        <h3 style={styles.text}>We support all your occasions!</h3>

        <img src={S} alt=" The Seats1 " style={styles.theSeats1} />
      </div>
      <div style={styles.list}>
        <div style={styles.Margin}>
          <img
            src={Outdoorseatings[0].Image}
            alt={Outdoorseatings[0].name}
            style={styles.OutdoorseatingsImage}
          />
          <p style={styles.text}> {Outdoorseatings[0].name}</p>
          <p style={styles.text}>{Outdoorseatings[0].price} KD</p>
        </div>

        <div style={styles.Margin}>
          <img src={S2} alt=" The Seats3 " style={styles.theSeats3} />
          <p style={styles.text}> {Outdoorseatings[1].name}</p>
          <p style={styles.text}>130 KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
