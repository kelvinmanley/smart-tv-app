const extractSlugsAndTitles = (topicsAndPhotos) =>
  topicsAndPhotos.map((data) => ({
    slug: data.slug,
    title: data.title,
  }));

module.exports = extractSlugsAndTitles;
