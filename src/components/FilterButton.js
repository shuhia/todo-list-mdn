import React from "react";

function FilterButton({ name, filterTasks: setFilter }) {
  function filter(e) {
    setFilter(name);
  }
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed="true"
      onClick={filter}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden">tasks</span>
    </button>
  );
}

export default FilterButton;
