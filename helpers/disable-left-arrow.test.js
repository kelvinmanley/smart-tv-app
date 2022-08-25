const disableLeftArrow = require("./disable-left-arrow");

describe("Test Disable Left Arrow", () => {
  it("Enter a valid value", () => {
    const arrowState = disableLeftArrow(0);
    expect(arrowState).toEqual(true);
  });
  it("Enter an invalid value", () => {
    const arrowState = disableLeftArrow(2);
    expect(arrowState).toEqual(false);
  });
});
