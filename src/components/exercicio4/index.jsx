import { useState } from "react";
import Button from "./Button/Button";
import Container from "./Container/Container";

function Exercicio4() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <p>
        Button has been clicked: {count} time{count != 1 && "s"}
      </p>
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
    </Container>
  );
}

export default Exercicio4;
