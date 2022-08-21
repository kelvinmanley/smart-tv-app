import type { NextPage } from "next";
import { useFeature } from "@growthbook/growthbook-react";
import { useEffect, useState } from "react";
import WipHeading from "../components/wip-heading";

const Home: NextPage = () => {
  const featureFlag = useFeature("access").on;
  const [pageState, setPageState] = useState(false);

  useEffect(() => {
    setPageState(featureFlag);
  }, [featureFlag]);

  return pageState ? (
    <>SHOW WORK</>
  ) : (
    <WipHeading>Watch this space...</WipHeading>
  );
};

export default Home;
