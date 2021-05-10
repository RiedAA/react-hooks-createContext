import React, { useEffect, useState } from "react";
import { Counter, Container, Title } from "./style";
import { UsernameContext } from "../App";

export default function StarWarsPlanets({ username }) {
  const [counter, setCounter] = useState(0);
  const [planet, setPlanet] = useState(false);

  useEffect(() => {
    if (counter > 0) {
      fetch(`https://swapi.dev/api/planets/${counter}/`)
        .then((response) => response.json())
        .then((data) => setPlanet(data));
    }
  }, [counter]);

  return (
    <Container>
      <UsernameContext.Consumer>
        {(username) => <Title>Select your planet {username}</Title>}
      </UsernameContext.Consumer>

      <section>
        <Counter onClick={() => setCounter((c) => c - 1)}>-</Counter>
        {counter}
        <Counter onClick={() => setCounter((c) => c + 1)}>+</Counter>
      </section>
      <Title>
        {planet.name} {planet && `has population of ${planet.population}`}
      </Title>
    </Container>
  );
}
