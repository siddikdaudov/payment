import { Input } from "@mui/material";
import { useAppContext } from "../context/state";

const CardNumber = () => {
  const values = useAppContext();
  const { cardNumber } = useAppContext();
  const { setValues } = useAppContext();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value.replace(/\D/g, "") });
  };

  return (
    <Input
      placeholder="0000 0000 0000 0000"
      disableUnderline
      style={{ width: "90%", fontSize: "30px", marginTop: "70px" }}
      inputProps={{ maxLength: 16 }}
      value={cardNumber}
      onChange={handleChange("cardNumber")}
    />
  );
};

export default CardNumber;
