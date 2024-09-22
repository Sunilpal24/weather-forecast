// components/SearchCity.js
import React, { useState } from 'react';

const SearchCity = ({ setCity }) => {
  const [inputValue, setInputValue] = useState('');

  // Function to handle the search
  const handleSearch = () => {
    if (inputValue) {
      setCity(inputValue);
      setInputValue(''); // Clear the input after search
    }
  };

  // Function to handle key press (trigger search on "Enter" key)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-city">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress} // Listen for Enter key
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchCity;
