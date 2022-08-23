const disableLeftArrow = (imagesColumnIndex) => {
  if (imagesColumnIndex === 0) return true;
  return false;
};

const disableRightArrow = (imagesColumnIndex, windowWidth) => {
  if (windowWidth > 600 && imagesColumnIndex === -8) return true;
  if (windowWidth <= 600 && imagesColumnIndex === -6) return true;
  return false;
};

export { disableLeftArrow, disableRightArrow };
