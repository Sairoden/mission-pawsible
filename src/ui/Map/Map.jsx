// REACT & LIBRARIES
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";

// STYLES
import "./Map.scss";
import "react-leaflet-fullscreen/styles.css";

function Map({ center, location, zoom }) {
  return (
    <div className="mapContainer">
      <MapContainer center={center} zoom={zoom} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          maxZoom={20}
        />

        <Marker position={center}>
          <Popup>{location}</Popup>
        </Marker>

        <FullscreenControl forceSeparateButton={true} position="topright" />
      </MapContainer>
    </div>
  );
}

export default Map;
