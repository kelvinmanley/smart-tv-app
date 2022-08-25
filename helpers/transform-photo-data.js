// Get the specific photo data by topic
// Convert data from object structure to array by extracting values
// Drop last 2 values as they are unnecessary topic data

const transformPhotoData = (topicsAndPhotos, topicToDisplay) => {
  const filterPhotos = topicsAndPhotos.filter(
    (topic) => topic.slug === topicToDisplay
  );
  const photoValues = Object.values(filterPhotos[0]);
  return photoValues.slice(0, 20);
};

module.exports = transformPhotoData;
