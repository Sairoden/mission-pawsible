export const getAllResources = async () => {
  try {
    const res = await fetch(
      "https://mission-pawsible-backend.onrender.com/api/v1/resources"
    );

    if (!res.ok) throw new Error("News articles could not be loaded");

    const data = await res.json();

    const resources = data?.results.filter(
      (resource, index, self) =>
        index === self.findIndex(r => r.title === resource.title)
    );

    return resources;
  } catch (error) {
    console.error(error.message);
  }
};


