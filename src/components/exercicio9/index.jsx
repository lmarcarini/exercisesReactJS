import { useEffect, useRef } from "react";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import useFetch from "./hooks/useFetch";
import styles from "./Exercicio9.module.css";
import Card from "./components/Card/Card";

const Exercicio9 = () => {
  const { data, loading, error, fetchData } = useFetch();
  const isFirstRef = useRef(true);

  const fetchRandom = () =>
    fetchData("https://random-data-api.com/api/users/random_user?size=10");

  useEffect(() => {
    if (!isFirstRef.current) return;
    fetchRandom();
    isFirstRef.current = false;
  }, []);
  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button onClick={fetchRandom}>Fetch Random</Button>
      </div>
      <Container>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && !loading && (
          <ul className={styles.cardList}>
            {data.map((user) => (
              <li key={user.id}>
                <Card {...user} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
};

export default Exercicio9;
