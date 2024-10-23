import React from "react";
import { Popup } from "react-map-gl";
import "../styles/PopupComponent.css" ;

interface PopupInfo {
  longitude: number;
  latitude: number;
  properties: { mag: number; time: number };
}

interface PopupComponentProps {
  popupInfo: PopupInfo | null;
  onClose: () => void;
}

const PopupComponent: React.FC<PopupComponentProps> = ({ popupInfo, onClose }) => {
  if (!popupInfo) return null;

  return (
    <Popup
      longitude={popupInfo.longitude}
      latitude={popupInfo.latitude}
      anchor="bottom"
      onClose={onClose}
      closeButton={false} 
      closeOnClick={false}
      className="popup-container"
    >
      <div className="popup-header flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-800">Magnitude: {popupInfo.properties.mag}</h3>
        <button
          onClick={onClose}
          className="popup-close-button text-gray-500 hover:text-gray-800 text-xl focus:outline-none ml-2"
        >
          &times;
        </button>
      </div>
      <p className="text-gray-600 text-base mt-1">
        Date: {new Date(popupInfo.properties.time).toLocaleDateString()}
      </p>
    </Popup>
  );
};

export default PopupComponent;

