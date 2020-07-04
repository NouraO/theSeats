import React, { useState } from "react";
import S from "./S.jpg";

//Components
import SeatsList from "./components/SeatsList";

//styles
import { ThemeProvider } from "styled-components";
import {
  Description,
  TheSeats1,
  ThemeButton,
  // DeleteButtonStyled,
  Title,
} from "./styles";
import GloblStyle from "./styles";

const theme = {
  light: {
    mainColor: "purple",
    backgroundColor: "black",
    pink: "#ff85a2",
    red: "#ff3232",
  },

  dark: {
    mainColor: "purple",
    backgroundColor: "White",
    pink: "#ff85a2",
    red: "#ff3232",
  },
};
function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const handleToggle = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GloblStyle />
      <ThemeButton onClick={handleToggle}>
        {currentTheme === "light" ? "Dark" : "Light"} MODE
      </ThemeButton>

      <div>
        <Title> The Seats </Title>
        <Description> Gathering and more </Description>
        <TheSeats1 src={S} alt=" The Seats " />
      </div>

      <SeatsList />
    </ThemeProvider>
  );
}

export default App;
