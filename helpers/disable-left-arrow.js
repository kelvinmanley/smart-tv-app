const disableLeftArrow = (imagesColumnIndex) => {
  if (imagesColumnIndex === 0) return true;
  return false;
};

module.exports = disableLeftArrow;
