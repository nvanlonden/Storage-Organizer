import React, { useState, useEffect } from 'react';
import data from './data.json';

function EmptyGrid({ firstImage }) {
  const [grid, setGrid] = useState(Array(6).fill(null).map(() => Array(9).fill(null)));

  useEffect(() => {
    if (firstImage) {
      const newGrid = [...grid];
      newGrid[0][0] = firstImage.id.toString();
      setGrid(newGrid);
    }
  }, [firstImage]);

  const handleImageDrop = (event, x, y) => {
    const imageId = event.dataTransfer.getData("imageId");
    const newGrid = [...grid];
    newGrid[x][y] = imageId;
    setGrid(newGrid);
  }

  return (
    <div className="empty-grid">
      {grid.map((row, x) => (
        <div className="row" key={x}>
          {row.map((cell, y) => (
            <div 
              className="cell" 
              key={y} 
              onDrop={event => handleImageDrop(event, x, y)} 
              onDragOver={event => event.preventDefault()}
            >
              {cell && (
                <img src={`./images/${data.find(image => image.id === parseInt(cell)).fileName}`} alt={cell} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default EmptyGrid;
