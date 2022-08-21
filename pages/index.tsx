import type { NextPage } from "next";
import { useFeature } from "@growthbook/growthbook-react";
import WipHeading from "../components/wip-heading";

const Home: NextPage = () => {
  const featureFlag = useFeature("access").on;

  return (
    <>
      {featureFlag ? (
        <>SHOW WORK</>
      ) : (
        <WipHeading>Watch this space...</WipHeading>
      )}
    </>
  );
};

export default Home;
