import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import EmptyGrid from './EmptyGrid';
import data from './data.json';
import './App.css';
import FilterPane from './FilterPane';

function App() {
  const [searchText, setSearchText] = useState('');
  const [firstImage, setFirstImage] = useState(null);

  const filteredData = data.filter(image =>
    image.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchText(event.target.value);
  };

  const handleFillGrid = () => {
    setFirstImage(filteredData[0]);
  };

  return (
    <div className="App">
      <FilterPane onFillGrid={handleFillGrid} />
      <div className="search-container">
        <input type="text" placeholder="Search..." value={searchText} onChange={handleSearchChange} />
      </div>
      <div className="grid-container">
        <ImageGrid searchText={searchText} data={data} />
        <EmptyGrid firstImage={firstImage} />
      </div>
    </div>
  );
}

export default App;
