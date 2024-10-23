
import React from "react";
import {  Layer, Source } from "react-map-gl";

interface EarthquakeLayerProps {
  data: any;
}

const EarthquakeLayer: React.FC<EarthquakeLayerProps> = ({ data }) => {
  if (!data) return null; 

  return (
    <Source id="earthquake-layer" type="geojson" data={data}>
      <Layer
        id="earthquake-layer"
        type="circle"
        paint={{
          "circle-radius": 6,
          "circle-color": "#222978",
        }}
      />
    </Source>
  );
};

export default EarthquakeLayer;
