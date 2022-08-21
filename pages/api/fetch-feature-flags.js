import attempt from "@assertchris/attempt-promise";
import axios from "axios";

const FetchFeatureFlags = async (_req, res) => {
  const [error, response] = await attempt(
    axios.get(process.env.FEATURE_FLAG_ENDPOINT)
  );

  if (error) {
    return res
      .status(400)
      .json({ error: "Feature flag data could not be retrieved" });
  }

  return res.status(200).json(response.data.features);
};

export default FetchFeatureFlags;
