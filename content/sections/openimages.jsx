import React, { useState } from "react";
import "./openimages.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Mountain");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleItemHover = (item) => {
    setSelectedItem(item);
  };

  const getImagePath = (item) => {
    switch (item) {
      case "Mountain":
        return "/mountain.jpeg";
      case "Forest":
        return "/forest.jpeg";
      case "Ocean":
        return "/ocean.jpeg";
      case "Desert":
        return "/desert.jpeg";
      default:
        return null; // Return null when no image is selected
    }
  };

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <button className="dropdown-toggle">
          <b>{selectedItem || "Dropdown"}</b>
          <span className={`arrow ${isOpen ? "up" : "down"}`} />
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              <li
                onClick={() => handleItemClick("Mountain")}
                onMouseEnter={() => handleItemHover("Mountain")}
              >
                Mountain
              </li>
              <li
                onClick={() => handleItemClick("Forest")}
                onMouseEnter={() => handleItemHover("Forest")}
              >
                Forest
              </li>
              <li
                onClick={() => handleItemClick("Ocean")}
                onMouseEnter={() => handleItemHover("Ocean")}
              >
                Ocean
              </li>
              <li
                onClick={() => handleItemClick("Desert")}
                onMouseEnter={() => handleItemHover("Desert")}
              >
                Desert
              </li>
            </ul>
          </div>
        )}
      </div>
      {selectedItem && (
        <div className="image-container">
          <img src={getImagePath(selectedItem)} alt="Selected Image" />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
