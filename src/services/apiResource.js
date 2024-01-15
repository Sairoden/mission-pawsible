// REACT & LIBRARIES
import axios from "axios";

export const getAllResources = async () => {
  try {
    const res = await axios(
      `https://mission-pawsible-backend.onrender.com/api/v1/resources`
    );

    if (!res.status === 200) throw new Error("Resources could not be loaded");

    const resources = res.data?.resources?.filter(
      resource => resource.title !== "[Removed]"
    );

    return resources;
  } catch (error) {
    console.error(error.message);
  }
};
