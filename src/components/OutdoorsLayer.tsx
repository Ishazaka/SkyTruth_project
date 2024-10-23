import React from "react";
import { Source, Layer } from "react-map-gl";

const OUTDOORS_TILE_URL = `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=${import.meta.env.VITE_OUTDOORS_API_KEY}`;

const OutdoorsLayer: React.FC = () => (
  <Source id="outdoors-layer" type="raster" tiles={[OUTDOORS_TILE_URL]} tileSize={256}>
    <Layer id="outdoors-layer" type="raster" />
  </Source>
);

export default OutdoorsLayer;
