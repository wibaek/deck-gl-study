import React from "react";
// import DeckGL from "@deck.gl/react";
// import { MapViewState } from "@deck.gl/core";
// import { LineLayer } from "@deck.gl/layers";

// const INITIAL_VIEW_STATE: MapViewState = {
//   longitude: -122.41669,
//   latitude: 37.7853,
//   zoom: 13,
// };

// type DataType = {
//   from: [longitude: number, latitude: number];
//   to: [longitude: number, latitude: number];
// };

// function App() {
//   const layers = [
//     new LineLayer<DataType>({
//       id: "line-layer",
//       data: "/path/to/data.json",
//       getSourcePosition: (d: DataType) => d.from,
//       getTargetPosition: (d: DataType) => d.to,
//     }),
//   ];

//   return <DeckGL initialViewState={INITIAL_VIEW_STATE} controller layers={layers} />;
// }

////////////////////////////////////////
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapViewState } from "deck.gl";

function App() {
  const SEOUL_VIEW_STATE: MapViewState = {
    latitude: 37.5665,
    longitude: 126.978,
    zoom: 13,
  };
  const DEFAULT_MAP_STYLE = "mapbox://styles/mapbox/streets-v9";

  return (
    <Map
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        ...SEOUL_VIEW_STATE,
        zoom: 10,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle={CUSTOM_MAP_STYLE}
    />
  );
}

export default App;
