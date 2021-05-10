import React, { useEffect, useState } from "react";
import cat from "./cat.jpg";
import { Catimage, ShowImageButton, Container, Title } from "./style";
import { UsernameContext } from "../App";

export default function ShowCatImage({ username }) {
  const [counter, setCounter] = useState(0);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const log = showImage ? "The image is shown" : "The image is hidden";
    console.log(log);
  }, [showImage]);

  return (
    <Container>
      <UsernameContext.Consumer>
        {(username) => <Title>click to show the Cat {username}</Title>}
      </UsernameContext.Consumer>

      <section>
        <ShowImageButton onClick={() => setShowImage((show) => !show)}>
          Toggle the Image
        </ShowImageButton>
        {showImage ? <Catimage src={cat} alt="cat" /> : null}
      </section>
    </Container>
  );
}
