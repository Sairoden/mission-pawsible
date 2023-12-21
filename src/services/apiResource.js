export const getAllResources = async () => {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=pets&lang=en&max=100&apikey=${
        import.meta.env.VITE_NEWS_KEY
      }`
    );

    if (!res.status) throw new Error("News articles could not be loaded");

    const data = await res.json();

    return data?.articles;
  } catch (error) {
    console.error(error.message);
  }
};
