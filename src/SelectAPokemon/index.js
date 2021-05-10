import React, { useEffect, useState } from "react";
import { Title, Container, Text } from "../style";
import { UsernameContext } from "../App";

export default function SelectAPokemon({ username }) {
  const [selectedPokemon, setSelectedPokemon] = useState("bulbasaur");
  const [pokemon, setPokemon] = useState();
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=100"
    );
    const data = await response.json();

    setAllPokemon(data.results);
  };

  const getOnePokemon = async () => {
    setLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
    );
    const data = await response.json();

    setLoading(false);
    setPokemon(data);
  };
  useEffect(() => {
    getAllPokemon();
  }, []);

  useEffect(() => {
    if (selectedPokemon) {
      setPokemon();
      getOnePokemon();
    }
  }, [selectedPokemon]);

  return (
    <Container>
      <UsernameContext.Consumer>
        {(value) => <Title>Select A Pokemon {value}</Title>}
      </UsernameContext.Consumer>
      <div style={{ maxWidth: "150px" }}>
        <SelectorArr
          onChange={(e) => setSelectedPokemon(e.target.value)}
          options={allPokemon}
        />
      </div>

      {loading && <h2>loading</h2>}
      {pokemon && (
        <>
          <br />
          <br />
          <Text>{pokemon.name}</Text>
          <p>
            Abilities: {pokemon.abilities[0].ability.name},{" "}
            {pokemon.abilities[1].ability.name}
          </p>
          <p></p>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
          />
        </>
      )}
    </Container>
  );
}
function SelectorArr({ onChange, options }) {
  return (
    <select onChange={onChange} style={{ width: "100%" }}>
      <option default />
      {options.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
