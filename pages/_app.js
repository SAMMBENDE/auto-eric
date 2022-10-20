import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;
