import Container from "./Container/Container";
import List from "./List/List";

function Exercicio6() {
  const data = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <Container>
      <List dataArray={data}></List>
    </Container>
  );
}

export default Exercicio6;
