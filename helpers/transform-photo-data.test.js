const transformPhotoData = require("./transform-photo-data");

describe("Test Transform Photo Data", () => {
  it("Extract values correctly", () => {
    const photoData = transformPhotoData(
      [
        {
          0: { hello: "world", foo: "bar" },
          1: { hello: "wide", foo: "one" },
          slug: "test",
        },
      ],
      "test"
    );
    expect(photoData).toEqual([
      { hello: "world", foo: "bar" },
      { hello: "wide", foo: "one" },
      "test",
    ]);
  });
});
