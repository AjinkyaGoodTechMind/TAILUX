import React, { useState } from "react";

export default function Content() {
  const [displayItems, setDisplayItems] = useState(false);
  const [displayDrop, setDisplayDrop] = useState(false);

  const handleDropdownClick = () => {
    setDisplayItems(!displayItems);
  };
  const handleDropClick = () => {
    setDisplayDrop(!displayDrop);
  };

  const handleItemClick = (e) => {
    setDisplayItems(false);
  };

  const handleLabelClick = (event) => {
     const input = event.target.previousElementSibling;
  if (input.type === "radio") {
    input.checked = true;
  }
  };

  return (
    <div id="Content">
      <h1 className="Content-h1">Select The Product to Customize</h1>
      <h3 className="Content-h3">Select Category</h3>
      <div className="container">
      <div className="dropdown-box-page1">
        Choose Category
        <i className="fa-solid fa-sort-down" onClick={handleDropdownClick}></i></div>
        <div className="items down-item-1" style={{ display: displayItems ? "" : "none" }}>
          <form>
            <label htmlFor="">
              <input
                type="radio"
                name="category"
                value="MEN"
                onClick={handleItemClick}
              />{" "}
              <span onClick={handleLabelClick}>MEN</span>
            </label>
            <label htmlFor="" className="border-label">
              <input
                type="radio"
                name="category"
                value="WOMEN"
                onClick={handleItemClick}
              />{" "}
              <span onClick={handleLabelClick}>WOMEN</span>
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="category"
                value="KIDS"
                onClick={handleItemClick}
              />{" "}
              <span onClick={handleLabelClick}>KIDS</span>
            </label>
          </form>
        </div>
      </div>
      <h3 className="Content-h3">Select product to Customize</h3>
      <div className="container">

        <div className="dropdown-box-page1">
        Search Products
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={handleDropClick}
          style={{ cursor: "pointer" }}
        ></i>
        </div>
      </div>
      <div
        className="items down-item-2"
        style={{ display: displayDrop ? " " : "none" }}
      >
        <form action="">
          <label htmlFor="">
            <input
              type="radio"
              name="category-product"
              value="MEN"
              onClick={handleItemClick}
            />
            <span onClick={handleLabelClick}>Formal Shirt</span>
          </label>
          <label htmlFor="" className="border-label">
            <input
              type="radio"
              name="category-product"
              value="WOMEN"
              onClick={handleItemClick}
            />{" "}
            <span onClick={handleLabelClick}>Formal Pant</span>
          </label>
        </form>
      </div>
      <h3 id="Naming-Design">Name your Design</h3>
      <input type="text" name="NameDesign" id="NameDesign" placeholder="Type name here..." />
      <button id="Step1-button">Save</button>
    </div>
  );
}
