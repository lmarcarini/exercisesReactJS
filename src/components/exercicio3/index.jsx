import Button from "./Button/Button";
import styles from "./ButtonWrapper.module.css";

function Exercicio3() {
  return (
    <div className={styles.buttonWrapper}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </div>
  );
}

export default Exercicio3;
