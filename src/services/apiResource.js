export const getAllResources = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?qInTitle="pets"&sortBy=publishedAt&language=en&apiKey=${
        import.meta.env.VITE_NEWS_KEY
      }`
    );

    const data = await res.json();

    if (data.status !== "ok")
      throw new Error("News articles could not be loaded");

    const resources = data?.articles.filter(resource => resource.urlToImage);

    console.log(resources);

    return resources;
  } catch (error) {
    console.error(error.message);
  }
};
