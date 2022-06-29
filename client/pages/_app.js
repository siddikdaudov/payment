import "../styles/global.css";
import { AppWrapper } from "../context/state";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
