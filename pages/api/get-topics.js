const { unsplash } = require("../../helpers");

const GetTopics = async (req, res) => {
  let response = undefined;

  try {
    response = await unsplash.topics.list({
      page: req.query.page,
      perPage: req.query.perPage,
    });
  } catch (err) {
    return res.status(400).json({ error: "Failure fetching topics" });
  }

  res.status(200).json({ topics: response.response.results });
};

module.exports = GetTopics;
