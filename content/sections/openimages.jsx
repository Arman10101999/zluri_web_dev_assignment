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
        return "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftoppng.com%2Fuploads%2Fpreview%2Fforest-png-image-tree-for-background-115629218539c06ibwety.png&tbnid=i8xUkCLHKUvV0M&vet=12ahUKEwjd-MP55vn_AhW3_TgGHRGjCX8QMygDegUIARCpAQ..i&imgrefurl=https%3A%2F%2Ftoppng.com%2Ffree-image%2Fforest-png-image-tree-for-background-PNG-free-PNG-Images_175197&docid=9RvNsWamCspVxM&w=840&h=859&q=forest%20png%20with%20short%20link&ved=2ahUKEwjd-MP55vn_AhW3_TgGHRGjCX8QMygDegUIARCpAQ";
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
