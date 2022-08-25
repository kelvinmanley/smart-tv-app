const getTopics = require("./get-topics");
const axios = require("axios");

jest.mock("axios");

describe("Test Get Topics", () => {
  it("Make a call and check mocked value", async () => {
    axios.get.mockResolvedValue({
      data: {
        topics: "Topics",
      },
    });

    const topics = await getTopics("test", 1, 1);
    expect(topics).toEqual({ data: "Topics" });
  });
  it("Make a invalid call and check for an error", async () => {
    axios.get.mockRejectedValueOnce();
    try {
      await getTopics();
    } catch (error) {
      expect(error).toHaveProperty("message", "Unable to get topics");
    }
  });
});
