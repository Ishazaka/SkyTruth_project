import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import Sidebar from "./components/Sidebar";
import "./index.css"; 
import "./App.css"; 



const App: React.FC = () => {
  const [showEarthquake, setShowEarthquake] = useState(false);
  const [showOutdoors, setShowOutdoors] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
   

<div className="h-screen">
  <Sidebar
    showEarthquake={showEarthquake}
    setShowEarthquake={setShowEarthquake}
    showOutdoors={showOutdoors}
    setShowOutdoors={setShowOutdoors}
    isSidebarOpen={isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
  />
  <div className="map-container">
    <MapComponent
      showEarthquake={showEarthquake}
      showOutdoors={showOutdoors}
    />
  </div>
</div>

  );
};

 export default App;