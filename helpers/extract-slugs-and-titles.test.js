const extractSlugsAndTitles = require("./extract-slugs-and-titles");

describe("Test Extract Slugs And Titles", () => {
  it("Extract values correctly", () => {
    const slugsAndTitles = extractSlugsAndTitles([
      { slug: "hello", title: "world" },
    ]);
    expect(slugsAndTitles).toEqual([{ slug: "hello", title: "world" }]);
  });
});
