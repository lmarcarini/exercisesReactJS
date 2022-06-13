import React from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";
import styles from "./Form.module.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    alert(`Hello ${firstName} ${lastName}!`);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input name="firstName" placeholder="First Name" required />
      <Input name="lastName" placeholder="Last Name" required />
      <Button>GREET ME</Button>
    </form>
  );
};

export default Form;
