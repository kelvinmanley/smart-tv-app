const disableRightArrow = require("./disable-right-arrow");

describe("Test Disable Right Arrow For Desktop", () => {
  it("Enter width > 1840 and valid index", () => {
    const isDisabled = disableRightArrow(1841, -6);
    expect(isDisabled).toEqual(false);
  });
});
describe("Test Disable Right Arrow For Mobile", () => {
  it("Enter width > 580 and valid index", () => {
    const isDisabled = disableRightArrow(581, -5);
    expect(isDisabled).toEqual(false);
  });
  it("Enter width > 350 and valid index", () => {
    const isDisabled = disableRightArrow(351, -6);
    expect(isDisabled).toEqual(false);
  });
  it("Enter width < 350", () => {
    const isDisabled = disableRightArrow(349, -6);
    expect(isDisabled).toEqual(false);
  });
});
