const getTopicPhotos = require("./get-topic-photos");
const axios = require("axios");

jest.mock("axios");

describe("Test Get Topic Photos", () => {
  it("Make a call and check mocked value", async () => {
    axios.get.mockResolvedValue({
      data: {
        topicPhotos: "Topic photos",
      },
    });

    const topicPhotos = await getTopicPhotos("test", 1, 1);
    expect(topicPhotos).toEqual({ data: "Topic photos" });
  });
  it("Make a invalid call and check for an error", async () => {
    axios.get.mockRejectedValueOnce();
    try {
      await getTopicPhotos();
    } catch (error) {
      expect(error).toHaveProperty("message", "Unable to get topic photos");
    }
  });
});
