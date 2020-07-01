import React from "react";
import S from "./S.jpg";
import S1 from "./S1.jpg";
import S2 from "./S2.jpeg";
import S3 from "./S3.jpeg";

//Data
import Outseatings from "./seatings";

//styles
import styles from "./styles";

function App() {
  //console.log(Outseatings[0].name);
  const theseatingList = Outseatings.map((seatings) => (
    <div style={styles.Margin} key={seatings.id}>
      <img src={seatings.Image} alt={seatings.name} style={styles.seatImage} />
      <p style={styles.text}> {seatings.name}</p>
      <p style={styles.text}>{seatings.price} KD</p>
    </div>
  ));

  return (
    <div>
      <div>
        <h1 style={styles.text}>The Seats</h1>
        <h3 style={styles.text}>We support all your occasions!</h3>

        <img src={S} alt=" The Seats1 " style={styles.theSeats1} />
      </div>

      <div style={styles.list}>{theseatingList}</div>
    </div>
  );
}

export default App;
