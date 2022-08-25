const axios = require("axios");

const getTopics = async (page, perPage) => {
  let response = undefined;

  try {
    response = await axios.get(`${process.env.NEXT_PUBLIC_TOPIC_ENDPOINT}`, {
      params: { page, perPage },
    });
  } catch (error) {
    throw { message: "Unable to get topics", error };
  }
  return { data: response.data.topics };
};

module.exports = getTopics;
