import { useEffect, useRef } from "react";
import Button from "./components/Button/Button";
import Container from "./components/Container/Container";
import useFetch from "./hooks/useFetch";
import styles from "./Exercicio9.module.css";
import Card from "./components/Card/Card";
import useInfiniteScroll from "./hooks/useInfiniteScroll";

const FETCH_URL = "https://random-data-api.com/api/users/random_user?size=10";

const Exercicio9 = () => {
  const { data, loading, error, fetching, fetchData, fetchMoreData } =
    useFetch();
  useInfiniteScroll(() => {
    if (!fetching) fetchMoreData(FETCH_URL);
  });
  const isFirstRef = useRef(true);

  useEffect(() => {
    if (!isFirstRef.current) return;
    fetchData(FETCH_URL);
    isFirstRef.current = false;
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    fetchData(FETCH_URL);
  };
  return (
    <>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleClick}>Fetch Random</Button>
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
        {!loading && fetching && <p>Fetching...</p>}
      </Container>
    </>
  );
};

export default Exercicio9;
