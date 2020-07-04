import React from "react";

//styles

import { ItemWrapper, DeleteButtonStyled } from "../styles";
//Data

const SeatsItem = (props) => {
  const seating = props.seating;

  const handelDelete = () => {
    // alert(`Delete Seating #${props.seating.id}`);
    props.deleteseating(seating.id);
  };

  return (
    <ItemWrapper>
      <img src={seating.Image} alt={seating.name} />
      <p> {seating.name}</p>
      <p className="seating-price">{seating.price} KD</p>
      <DeleteButtonStyled onClick={handelDelete}>Delete</DeleteButtonStyled>
    </ItemWrapper>
  );
};

export default SeatsItem;
