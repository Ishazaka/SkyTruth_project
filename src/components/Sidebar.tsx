
import React from "react";
import { FaGlobeAmericas, FaMountain, FaBars } from "react-icons/fa";
import "../App.css";
import InputLabel from "./InputLabel";

interface Props {
  showEarthquake: boolean;
  setShowEarthquake: React.Dispatch<React.SetStateAction<boolean>>;
  showOutdoors: boolean;
  setShowOutdoors: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({
  showEarthquake,
  setShowEarthquake,
  showOutdoors,
  setShowOutdoors,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <h2 className="text-xl font-bold">Map Layers</h2>

        <InputLabel
          checked={showOutdoors}
          onChange={() => setShowOutdoors(!showOutdoors)}
          label="Outdoors"
          icon={<FaMountain />}
        />

        <InputLabel
          checked={showEarthquake}
          onChange={() => setShowEarthquake(!showEarthquake)}
          label="Earthquakes"
          icon={<FaGlobeAmericas />}
        />
      </div>

      <button
        className="toggle-button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars />
      </button>
    </>
  );
};

export default Sidebar;
