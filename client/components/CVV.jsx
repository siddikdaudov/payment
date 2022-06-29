import { Input } from "@mui/material";
import { useAppContext } from "../context/state";

const CVV = () => {

	const values = useAppContext();
  const { CVV } = useAppContext();
  const { setValues } = useAppContext();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value.replace(/\D/g, "") });
  };

	return (
		<Input
		placeholder="CVV"
		disableUnderline
		style={{ width: "20%", fontSize: "30px"}}
		inputProps={{ maxLength: 3 }}
		value={CVV}
		onChange={handleChange('CVV')}
	/>
	);
};

export default CVV;