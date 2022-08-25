const { unsplash } = require("../../helpers");

const GetTopicPhotos = async (req, res) => {
  let response = undefined;

  try {
    response = await unsplash.topics.getPhotos({
      topicIdOrSlug: req.query.topicIdOrSlug,
      page: req.query.page,
      perPage: req.query.perPage,
    });
  } catch (err) {
    return res.status(400).json({ error: "Failure fetching topic photos" });
  }

  res.status(200).json({ topicPhotos: response.response.results });
};

module.exports = GetTopicPhotos;
