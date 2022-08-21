import "../styles/globals.css";
import type { AppProps } from "next/app";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";

const growthbook = new GrowthBook();

const setFlagData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_FEATURE_FLAG_CALL}`);
  const flagData = await response.json();
  growthbook.setFeatures(flagData);
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
