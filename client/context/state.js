import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {

	const [values, setValues] = useState({
		cardNumber: '',
		date: '',
		CVV: '',
		amount: ''
	});

  return (
    <AppContext.Provider value={{...values, setValues}}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
