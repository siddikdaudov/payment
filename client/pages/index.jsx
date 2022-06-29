import Amount from "../components/Amount";
import Card from "../components/Card/Card";
import { useAppContext } from "../context/state";
import { useState } from "react";
import { useEffect } from "react";

const Index = () => {
  const values = useAppContext();
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (
      values.cardNumber.length === 16 &&
      values.date !== "null" &&
      values.date[0] !== "0" &&
      values.date[1] !== "0" &&
      values.date[2] !== "0" &&
      values.CVV.length === 3 &&
      values.amount.length
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [values]);

  const getPay = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/pay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardNumber: values.cardNumber,
        expirationDate: values.date,
        cvv: values.CVV,
        amount: values.amount,
      }),
    });
    const data = await response.json();
    alert(JSON.stringify(data));
  };

  return (
    <section>
      <form>
        <Card />
        <Amount />
        <button
          disabled={isDisabled}
          className={isDisabled ? "disabled" : "active"}
          onClick={getPay}
        >
          Оплатить
        </button>
      </form>
    </section>
  );
};

export default Index;
