import axios from "axios";

const getTopicPhotos = async (topicIdOrSlug, page, perPage) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_TOPIC_PHOTOS_ENDPOINT}`,
    { params: { topicIdOrSlug, page, perPage } }
  );
  return { data: response.data.topicPhotos };
};

export default getTopicPhotos;
