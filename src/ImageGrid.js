import React, { useState } from 'react';
import './App.css';

function ImageGrid({ searchText, data, fillGrid }) {
  const [visible, setVisible] = useState({});

  const handleMouseEnter = (id) => {
    setVisible(prevVisible => ({...prevVisible, [id]: true}));
  };

  const handleMouseLeave = (id) => {
    setVisible(prevVisible => ({...prevVisible, [id]: false}));
  };

  const filteredData = data.filter(image =>
    image.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleFillGrid = () => {
    fillGrid(filteredData[0].id);
  };

  return (
    <div className="image-grid">
      {filteredData.map(image => (
        <div
          className={`image-container${image.column === 3 ? " right-column" : ""}`}
          key={image.id}
          onMouseEnter={() => handleMouseEnter(image.id)}
          onMouseLeave={() => handleMouseLeave(image.id)}
          onDragStart={event => event.dataTransfer.setData("imageId", image.id)}
        >
          <img src={`./images/${image.fileName}`} alt={image.title} draggable={true} />
          {visible[image.id] && (
            <div className="title">
              {image.title}
              <br />
              X {image.stack_size}
            </div>
          )}
        </div>
      ))}
      <div className="fill-grid-button">
        <button onClick={handleFillGrid}>Fill grid</button>
      </div>
    </div>
  );
}

export default ImageGrid;
