import axios from "axios";

const getTopics = async (page, perPage) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TOPIC_ENDPOINT}`,
    { params: { page, perPage } }
  );
  return { data: response.data.topics };
};

export default getTopics;
