// This function disables the right arrow based on the window width
const disableRightArrow = (imagesColumnIndex, windowWidth) => {
  // Desktop limits
  if (windowWidth > 600) {
    if (windowWidth > 1840) return imagesColumnIndex === -6;
    if (windowWidth > 1400) return imagesColumnIndex === -7;
    if (windowWidth > 960) return imagesColumnIndex === -8;
    return imagesColumnIndex === -9;
  }

  // Mobile limits
  if (windowWidth <= 600) {
    if (windowWidth > 580) return imagesColumnIndex === -5;
    if (windowWidth > 350) return imagesColumnIndex === -6;
  }

  return false;
};

export default disableRightArrow;
