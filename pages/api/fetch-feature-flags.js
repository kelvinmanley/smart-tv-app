const axios = require("axios");

const FetchFeatureFlags = async (_req, res) => {
  let response = undefined;

  try {
    response = await axios.get(process.env.FEATURE_FLAG_ENDPOINT);
  } catch (err) {
    return res
      .status(400)
      .json({ error: "Feature flag data could not be retrieved" });
  }
  return res.status(200).json(response.data.features);
};

module.exports = FetchFeatureFlags;
