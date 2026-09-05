import styles from "./card.module.css";

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default Card;
