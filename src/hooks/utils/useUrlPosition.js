// REACT & LIBRARIES
import { useSearchParams } from "react-router-dom";

export const useUrlPosition = () => {
  const [searchParams] = useSearchParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lng");

  if (!lat || !lng) {
    lat = 14.651482;
    lng = 121.04932;
  }

  return [lat, lng];
};
