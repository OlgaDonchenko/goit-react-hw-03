import React from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className={css.box}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
}
