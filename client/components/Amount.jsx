import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useAppContext } from "../context/state";

const Amount = () => {
  const values = useAppContext();
  const { amount } = useAppContext();
  const { setValues } = useAppContext();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value.replace(/\D/g, "") });
  };

  return (
    <FormControl fullWidth sx={{ width: "25ch", margin: "25px 0px" }}>
      <InputLabel htmlFor="outlined-adornment-amount">Сумма</InputLabel>
      <OutlinedInput
        id="outlined-adornment-amount"
        value={amount}
        onChange={handleChange('amount')}
        startAdornment={<InputAdornment position="start">₽</InputAdornment>}
        label="Amount"
      />
    </FormControl>
  );
};

export default Amount;
