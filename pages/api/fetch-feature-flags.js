import attempt from "@assertchris/attempt-promise";

const FetchFeatureFlags = async (_req, res) => {
  const [error, response] = await attempt(
    fetch(process.env.FEATURE_FLAG_ENDPOINT)
  );

  if (error) {
    return res
      .status(400)
      .json({ error: "Feature flag data could not be retrieved" });
  }

  const data = await response.json();
  return res.status(200).json(data.features);
};

export default FetchFeatureFlags;
