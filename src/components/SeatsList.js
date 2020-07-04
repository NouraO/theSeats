import React, { useState } from "react";

//components
import SeatsItem from "./SeatsItem";

//Data
import seatings from "../seatings";

//styles
import { ListWrapper } from "../styles";

const SeatsList = () => {
  const [seatingbyN, setSeatings] = useState(seatings);

  const deleteseating = (seatingId) => {
    const updateSeating = seatingbyN.filter(
      (seating) => seating.id !== seatingId
    );
    console.log(`Please delete seating ID #${seatingId}`);
    setSeatings(updateSeating);
    console.log(seatingbyN);
  };

  const theseatingList = seatingbyN.map((seating) => (
    <SeatsItem
      seating={seating}
      deleteseating={deleteseating}
      key={seating.id}
    ></SeatsItem>
  ));

  return <ListWrapper> {theseatingList} </ListWrapper>;
};

export default SeatsList;
