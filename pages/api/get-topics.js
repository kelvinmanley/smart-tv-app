import attempt from "@assertchris/attempt-promise";
import { unsplash } from "../lib";

const GetTopics = async (req, res) => {
  const [error, response] = await attempt(
    unsplash.topics.list({
      page: req.query.page,
      perPage: req.query.perPage,
    })
  );

  if (error) {
    return res.status(400).json({ error: "Failure fetching topics" });
  }

  res.status(200).json({ topics: response.response.results });
};

export default GetTopics;
