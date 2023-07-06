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
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRLo5MmqxLUfWqj4pvjqk6aVAhkGfTVjsPwdHIFCknw&s";
      case "Forest":
        return "data:image/jpeg;base64,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";
      case "Ocean":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsbJ7BXdjd8Y54er1Vzndu1KDys7amjHN5SNBZ9318w&s";
      case "Desert":
        return "https://img.lovepik.com/free-png/20211120/lovepik-desert-png-image_401076903_wh1200.png";
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
