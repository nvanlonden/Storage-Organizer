import React from 'react';
import data from './data.json';
import './App.css';

function ImageGrid({ searchText }) {
  const [visible, setVisible] = React.useState({});

  const filteredData = data.filter(image => image.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="image-grid">
      {filteredData.map(image => (
        <div 
          className="image-container" 
          key={image.id} 
          onMouseEnter={() => setVisible({ [image.id]: true })} 
          onMouseLeave={() => setVisible({ [image.id]: false })}
          onDragStart={event => event.dataTransfer.setData("imageId", image.id)}
        >
          <img src={`./images/${image.fileName}`} alt={image.title} draggable={true} />
          {visible[image.id] && (
            <div className="title">
              {image.title}
              <br />
              Stack Size: {image.stack_size}
            </div>
          )}
        </div>
      ))}
    </div>
  );
  
}

export default ImageGrid;
