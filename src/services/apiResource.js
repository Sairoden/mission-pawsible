export const getAllResources = async () => {
  try {
    const res = await fetch(
      `https://mission-pawsible-backend.onrender.com/api/v1/resources`
    );

    if (!res.ok) throw new Error("Resources could not be loaded");

    const data = await res.json();

    const resources = data?.resources?.filter(
      resource => resource.title !== "[Removed]"
    );

    return resources;
  } catch (error) {
    console.error(error.message);
  }
};
