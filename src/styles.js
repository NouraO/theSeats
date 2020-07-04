import styled, { createGlobalStyle } from "styled-components";

const ItemWrapper = styled.div`
  margin: 30px;

  img {
    width: 450 px;
    height: 450 px;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.mainColor};
    }
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

const Description = styled.h3`
  text-align: center;
  color: orange;
`;

const GlobalStyle = createGlobalStyle`
body{
color: ${(props) => props.theme.mainColor};
background-color: ${(props) => props.theme.backgroundColor}

}
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
const TheSeats1 = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 1000px;
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 2em;
  padding: 0.3em 1.2em;
  border-radius: 4px;
  backgroud-color: ${(props) => props.theme.mainColor};
`;

const Title = styled.h1`
  text-align: center;
  color: $(props) => props.theme.purple};
`;

export { ItemWrapper, Description, ListWrapper, TheSeats1, ThemeButton, Title };
export default GlobalStyle;
