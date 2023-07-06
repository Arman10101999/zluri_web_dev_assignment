import React, { useState } from "react";
import "./dropdown.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Dropdown");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    toggleDropdown();
  };

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <button className="dropdown-toggle">
          <b>{selectedItem}</b>
          <span className={`arrow ${isOpen ? "up" : "down"}`} />
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <ul>
              <li onClick={() => handleItemClick("Mountain")}>Mountain</li>
              <li onClick={() => handleItemClick("Forest")}>Forest</li>
              <li onClick={() => handleItemClick("Ocean")}>Ocean</li>
              <li onClick={() => handleItemClick("Desert")}>Desert</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
