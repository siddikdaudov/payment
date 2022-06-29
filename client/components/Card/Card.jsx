import styles from "./Card.module.css";
import ExpirationDate from "../ExpirationDate";
import CardNumber from "../CardNumber";
import CVV from "../CVV";

const Card = () => {
  return (
    <div className={styles.card}>
      <h1>Кредитная карта</h1>
        <CardNumber />
        <div className={styles.dateAndCVV}>
          <ExpirationDate />
          <CVV />
      </div>
    </div>
  );
};

export default Card;
