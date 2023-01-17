import React, { useState } from 'react';
import ImageGrid from './ImageGrid';
import EmptyGrid from './EmptyGrid';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <div className="search-container">
        <input type="text" placeholder="Search..." value={searchText} onChange={handleSearchChange} />
      </div>
      <div className="grid-container">
        <ImageGrid searchText={searchText} />
        <EmptyGrid />
      </div>
    </div>
  );
}

export default App;
