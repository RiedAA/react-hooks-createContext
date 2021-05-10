import React, { useState, createContext } from "react";
import SelectAPokemon from "./SelectAPokemon";
import ShowCatImage from "./ShowCatImage";
import StarWarsPlanets from "./StarWarsPlanets";
import { Title, NameInput, Container, Confirm, Text } from "./style";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Selector from "./Selector";
export const UsernameContext = createContext("");
export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#313131" : "#ececec"};
    color: ${(props) => (props.theme.mode === "dark" ? "#ececec" : "#313131")};
 }`;

export const App = () => {
  const [username, setUsername] = useState("");
  const [nameConfirmed, setNameConfirmed] = useState(false);
  const [game, setGame] = useState("");
  const [globalStyle, setGlobalStyle] = useState("dark");
  const [fontSize, setFontSize] = useState("");

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleGameChange = (e) => {
    setGame(e.target.value);
  };
  const handleConfrimClick = () => {
    if(username===""){alert("Please enter your lovely name!")}
else{
  setNameConfirmed(true);
}
    
  };
  const toggelTheme = () => {
    if (globalStyle === "light") {
      setGlobalStyle("dark");
    } else {
      setGlobalStyle("light");
    }
  };
  const handleFontSize = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <ThemeProvider theme={{ mode: globalStyle,fontsize:fontSize }}>
      <Container>
        {!nameConfirmed && (
          <>
            <GlobalStyle />
            <div
              style={{
                position: "absolute",
                right: "30px",
                textAlign: "center"
              }}
            >
              <Text>Change Font Size</Text>
              <Selector onChange={handleFontSize} options={["22px","24px","28px","30px","32px"]}/>
              
            </div>
            <Confirm onClick={toggelTheme}>
              Toggle Theme
            </Confirm>

            <Title>What is your Name</Title>
            <NameInput onChange={handleNameChange}></NameInput>
            <Confirm onClick={handleConfrimClick}>Confirm</Confirm>
          </>
        )}
        {nameConfirmed && (
          <>
            <GlobalStyle />
            <div
              style={{
                position: "absolute",
                right: "30px",
                textAlign: "center"
              }}
            >
              <Text>Change Font Size</Text>
              <Selector onChange={handleFontSize} options={["22px","24px","28px","30px","32px"]}/>
            </div>
           <Confirm onClick={toggelTheme}>
              Toggle theme
            </Confirm>
            <Title>What game do you want to play?</Title>
          <div style={{maxWidth:"150px",textAlign:"center"}}>
            <Selector onChange={handleGameChange} options={["cat","pokemon","starwars"]} style={{position:"absolute",left:"38%",top:"60%"}}/>
          </div>
            <UsernameContext.Provider value={username}>
              {game === "cat" && <ShowCatImage />}
              {game === "pokemon" && <SelectAPokemon />}
              {game === "starwars" && <StarWarsPlanets />}
            </UsernameContext.Provider>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};



  
