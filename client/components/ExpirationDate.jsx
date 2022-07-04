import { Input } from "@mui/material";
import format from "date-fns/format";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAppContext } from "../context/state";

const ExpirationDate = () => {
  const values = useAppContext();
  const { date } = useAppContext();
  console.log(date, values);
  const { setValues } = useAppContext();

  const handleChange = (prop, newValue) => {
    setValues({ ...values, [prop]: JSON.stringify(newValue) });
  };

  const showWarning = () => {
    if (
      date === "null" ||
      date[1] === "0" ||
      (date[1] === "0" && date[2] === '0') ||
      (date[2] === "0" && date[3] === '0')
    ) {
      alert("Исправьте дату");
      return;
    }
    return;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["day"]}
        inputFormat="MM/yyyy"
        label="Year and Month"
        value={date}
        onChange={(newValue) => handleChange("date", newValue)}
        renderInput={({ inputRef, inputProps }) => (
          <Input
            ref={inputRef}
            {...inputProps}
            disableUnderline
            onBlur={showWarning}
            placeholder={format(new Date(), "MM/yyyy")}
            style={{ width: "30%", fontSize: "30px" }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default ExpirationDate;
