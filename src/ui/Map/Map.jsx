// REACT & LIBRARIES
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { FullscreenControl } from "react-leaflet-fullscreen";

// STYLES
import "./Map.scss";
import "react-leaflet-fullscreen/styles.css";

function Map({
  center,
  location,
  zoom,
  petForm = false,
  changeMap = "",
  petId,
}) {
  return (
    <div className="mapContainer">
      <MapContainer center={center} zoom={zoom} className="map">
        <TileLayer
          // OPTIONS 1
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          // OPTIONS 2
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={20}
        />

        <Marker position={center}>
          <Popup>{location}</Popup>
        </Marker>

        <FullscreenControl forceSeparateButton={true} position="topright" />

        {petForm && (
          <>
            <ChangeCenter position={center} />
            <DetectClick changeMap={changeMap} petId={petId} />
          </>
        )}
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);

  return null;
}

function DetectClick({ changeMap, petId }) {
  const navigate = useNavigate();

  useMapEvents({
    click: e => {
      if (changeMap === "reportPet")
        navigate(`/report?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);

      if (changeMap === "updatePet")
        navigate(`/editPet/${petId}?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
