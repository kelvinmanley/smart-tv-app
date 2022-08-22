import attempt from "@assertchris/attempt-promise";
import { unsplash } from "../../helpers";

const GetTopicPhotos = async (req, res) => {
  const [error, response] = await attempt(
    unsplash.topics.getPhotos({
      topicIdOrSlug: req.query.topicIdOrSlug,
      page: req.query.page,
      perPage: req.query.perPage,
    })
  );

  if (error) {
    return res.status(400).json({ error: "Failure fetching topic photos" });
  }

  res.status(200).json({ topicPhotos: response.response.results });
};

export default GetTopicPhotos;
