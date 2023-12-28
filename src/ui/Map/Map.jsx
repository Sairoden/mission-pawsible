// REACT & LIBRARIES
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// STYLES
import "./Map.scss";

function Map({ center, location, zoom }) {
  return (
    <div className="mapContainer">
      <MapContainer center={center} zoom={zoom} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          maxZoom={20}
        />
        <Marker position={center}>
          <Popup>{location}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
