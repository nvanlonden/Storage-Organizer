import React from 'react';

function FilterPane({ onFillGrid }) {
  return (
    <div className="filter-pane">
      <button onClick={onFillGrid}>Fill grid</button>
    </div>
  );
}

export default FilterPane;
