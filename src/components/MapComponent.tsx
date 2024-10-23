import React, {useRef ,  useState, useCallback , useEffect } from "react";
import Map, { MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PopupComponent from "./PopupComponent";
import EarthquakeLayer from "./EarthquakeLayer";
import OutdoorsLayer from "./OutdoorsLayer";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

interface Props {
  showEarthquake: boolean;
  showOutdoors: boolean;
}

const MapComponent: React.FC<Props> = ({ showEarthquake, showOutdoors }) => {
  const mapRef = useRef<MapRef>(null);
  const earthquakeData = useRef<any>(null);

  const [popupInfo, setPopupInfo] = useState<{
    longitude: number;
    latitude: number;
    properties: { mag: number; time: number };
  } | null>(null);

  const [earthquakeLayerKey, setEarthquakeLayerKey] = useState(0);

  const fetchEarthquakeData = useCallback(async () => {
    if (earthquakeData.current) return;

    const res = await fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?minmagnitude=2.5&starttime=2022-01-01&endtime=2022-12-31&maxlatitude=40&minlongitude=-200&maxlongitude=0&minlatitude=30&format=geojson"
    );
    const { features } = await res.json();
    earthquakeData.current = {
      type: "FeatureCollection",
      features: features.filter((f: any) => f.properties.mag > 2.5),
    };
  }, []);

  useEffect(() => {
    fetchEarthquakeData();
  }, [fetchEarthquakeData]);

  useEffect(() => {
    if (showOutdoors && showEarthquake) {
      setEarthquakeLayerKey((key) => key + 1);
    }
  }, [showOutdoors, showEarthquake]);

  const handleMapClick = useCallback((event: any) => {
    const feature = event.features?.[0];
    if (feature) {
      setPopupInfo({
        longitude: event.lngLat.lng,
        latitude: event.lngLat.lat,
        properties: feature.properties,
      });
    }
  }, []);

  return (

    <div className="h-full">
  <h1 className="bg-[#2c3e50] text-[#ecf0f1] p-4 text-center text-xl font-bold">
    Earthquake & Outdoors Map
  </h1>
  <div className="h-full">
    <Map
      ref={mapRef}
      initialViewState={{ latitude: 35, longitude: -100, zoom: 5 }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
      interactiveLayerIds={["earthquake-layer", "outdoors-layer"]}
      onClick={handleMapClick}
    >
      {showOutdoors && <OutdoorsLayer />}
      {showEarthquake && (
        <EarthquakeLayer key={earthquakeLayerKey} data={earthquakeData.current} />
      )}
      <PopupComponent popupInfo={popupInfo} onClose={() => setPopupInfo(null)} />
    </Map>
  </div>
</div>

  );
};

export default MapComponent;
