const axios = require("axios");

const getTopicPhotos = async (topicIdOrSlug, page, perPage) => {
  let response = undefined;

  try {
    response = await axios.get(
      `${process.env.NEXT_PUBLIC_TOPIC_PHOTOS_ENDPOINT}`,
      {
        params: { topicIdOrSlug, page, perPage },
      }
    );
  } catch (error) {
    throw { message: "Unable to get topic photos", error };
  }

  return { data: response.data.topicPhotos };
};

module.exports = getTopicPhotos;
