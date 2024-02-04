// REACT & LIBRARIES
import axios from "axios";
import toast from "react-hot-toast";

export const getCoordsForAddress = async address => {
  const formatAddress = address.replace(/\s/g, "+").replace(/,/g, "%2C");

  const { data } = await axios.get(
    `
    https://maps.googleapis.com/maps/api/geocode/json?address=${formatAddress}&key=${
      import.meta.env.VITE_GOOGLE_KEY
    }
    `
  );

  if (data.status !== "OK" || !data.status)
    toast.error("Could not find location for the specified address");

  data.results[0];

  const location = {
    formattedAddress: data.results[0].formatted_address,
    lat: data.results[0].geometry.location.lat,
    lng: data.results[0].geometry.location.lng,
  };

  return location;
};

// https://maps.googleapis.com/maps/api/geocode/json?latlng=14.602943,121.0187439&key=AIzaSyD4dHRnyY_cdZGX0wSnPIrDQo6jTdBYpdg
