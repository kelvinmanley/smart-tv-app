import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import axios from "axios";

const growthbook = new GrowthBook();

// Gets the feature flag data and updates the instance
const setFlagData = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_FEATURE_FLAG_CALL}`
  );
  growthbook.setFeatures(response.data);
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  setFlagData();

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <Component {...pageProps} />
    </GrowthBookProvider>
  );
};

export default MyApp;
